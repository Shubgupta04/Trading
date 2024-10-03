const express = require('express');
const router = express.Router();
const { Signup, Login } = require('../Controllers/AuthController'); // Make sure path is correct
const { userVerification } = require('../Middlewares/AuthMiddleware'); // Make sure path is correct

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification); // Ensure this matches the intended route

module.exports = router;
