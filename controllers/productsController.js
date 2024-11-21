import db from '../firebase.js'
import Product from '../models/productModel.js'

export const index = async (req, res) => {
  try {
    const response = await db.collection('product').get();
    const product = response.docs.map(doc => {
      const data = doc.data();
      return new Product(doc.id, data.name, data.price)
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export const create = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const response = await db.collection('product').add({ name, price });
    const product = new Product(response.id, name, price);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create document' });
  }
}

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await db.collection('product').doc(id).get();

    if (!response.exists) {
      return res.status(404).json({ error: 'Person not found' });
    }

    const data = response.data();
    const product = new Product(response.id, data.name, data.price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    if (!name && !price) {
      return res.status(400).json({ error: 'At least one field (name or price) is required for update' });
    }

    const docRef = db.collection('product').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Person not found' });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (price) updateData.price = price;

    await docRef.update(updateData);
    const updatedDoc = await docRef.get();
    const product = new Product({ id: updatedDoc.id, ...updatedDoc.data() });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = db.collection('product').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Person not found' });
    }

    await docRef.delete();
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
