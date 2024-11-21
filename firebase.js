import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

import ENV from './env.js'

initializeApp({
  credential: cert(ENV.firebase)
})

const db = getFirestore()

export default db
