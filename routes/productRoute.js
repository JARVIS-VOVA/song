import express from 'express'

import {
  index,
  create,
  show,
  update,
  destroy,
} from '../controllers/productsController.js'

const router = express.Router()

router.get('/', index)
router.post('/', create)
router.get('/:id', show)
router.patch('/:id', update)
router.delete('/:id', destroy)

export default router
