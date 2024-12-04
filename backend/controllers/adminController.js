require('dotenv').config();
const jwt = require('jsonwebtoken');

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET } = process.env;

// Admin Login Controller
exports.adminLogin = (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
};

// Protected Admin Route
exports.adminProtected = (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        jwt.verify(token, JWT_SECRET);
        res.status(200).json({ message: 'Welcome to the admin page' });
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};
