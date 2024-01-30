/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51Odw3jSBMlOHYrbAabhBHEbN6uFUTCGfzbhskuu00SgmK60zRgFKLjMILEqcb5oS0v38rGLKyYOpH3UcjVeTpKcM005aQ5kbdO')

//API

//API config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => res.status(200).send('hello world'))

//Listen command
exports.api = onRequest(app)

// http://127.0.0.1:5001/project-94a17/us-central1/api

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });