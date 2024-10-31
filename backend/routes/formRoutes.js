const express = require('express');
const { submitForm } = require('../controllers/formController');
const router = express.Router();
const { registerFormData } = require('../models/formData'); // Adjust path as necessary

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Submit form data to Database RegisterForm
 *     tags: [RegisterForm]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               age:
 *                 type: string
 *               country:
 *                 type: string
 *               experience:
 *                 type: string
 *               kidsName:
 *                 type: string
 *               kidsAge:
 *                 type: string
 *     responses:
 *       201:
 *         description: Form data submitted successfully
 *       500:
 *         description: Error saving form data
 */











router.post('/register', submitForm);

module.exports = router;
