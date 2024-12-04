const express = require('express');
const { adminLogin, adminProtected } = require('../controllers/adminController');

const router = express.Router();

// Admin Login Route


/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Admin login
 *     description: Authenticate the admin with username and password.
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 */
router.post('/login', adminLogin);


// Admin Protected Route

/**
 * @swagger
 * /api/admin/protected:
 *   get:
 *     summary: Protected admin route
 *     description: Access a protected route (requires valid JWT).
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Access granted
 *       401:
 *         description: Unauthorized
 */
router.get('/protected', adminProtected);

module.exports = router;
