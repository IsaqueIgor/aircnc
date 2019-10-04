const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const router = express.Router();
const upload = multer(uploadConfig);

// Users
router.post('/users', SessionController.store);

// Spots
router.get('/spots', SpotController.index);
router.post('/spots', upload.single('thumbnail'), SpotController.store);

// Dashboard
router.get('/dashboard', DashboardController.show);

// Booking Nested route 
router.post('/spots/:id/bookings', BookingController.store);

module.exports = router;