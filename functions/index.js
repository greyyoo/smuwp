const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

admin.initializeApp(functions.config().firebase)

const app = express()

const verifyToken = async (req, res) => {
  const tk = req.headers.authorization.split(' ')[1]
  try {
    const user = await admin.auth().verifyIdToken(tk)
  } catch (e) {
    res.status(401).send({error: 'Unauthorized access. Please login again!'})
  }
}

app.use(cors({ origin: true }))
app.get('/', (req, res) => res.send('sookmyung'))
app.use(verifyToken)

exports.widgets = functions.https.onRequest(app)
