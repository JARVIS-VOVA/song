import dotenv from 'dotenv'
import assert from 'assert'

dotenv.config()

const {
  PORT,
  HOST,
  HOST_URL,

  FIREBASE_AUTH_PROVIDER_X509_CErT_URL,
  FIREBASE_API_URL,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_CLIENT_X509_CERT_URL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_TOKEN_URI,
  FIREBASE_TYPE,
  FIREBASE_UNIVERSE_DOMAIN,
} = process.env

assert(PORT, 'Port is required')
assert(HOST, 'Host is required')

const firebase = {
  "auth_provider_x509_cert_url": FIREBASE_AUTH_PROVIDER_X509_CErT_URL,
  "auth_uri": FIREBASE_API_URL,
  "client_email": FIREBASE_CLIENT_EMAIL,
  "client_id": FIREBASE_CLIENT_ID,
  "client_x509_cert_url": FIREBASE_CLIENT_X509_CERT_URL,
  "private_key": FIREBASE_PRIVATE_KEY,
  "private_key_id": FIREBASE_PRIVATE_KEY_ID,
  "project_id": FIREBASE_PROJECT_ID,
  "token_uri": FIREBASE_TOKEN_URI,
  "type": FIREBASE_TYPE,
  "universe_domain": FIREBASE_UNIVERSE_DOMAIN,
}

const ENV = {
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  firebase,
}

export default ENV
