

// this first bit is all taken fromthe firestore docs

const admin = require('firebase-admin');

const serviceAccount = require(process.env.FIRESTORE_SERVICE_ACCOUNT_KEY_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
