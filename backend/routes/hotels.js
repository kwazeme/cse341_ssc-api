/*
*
*   Hotels Routes
*
*/

const express = require('express');
const hotelCatalogue = require('../controllers/hotels');
const router = express.Router();

 router.get('/', hotelCatalogue.getHotels);
 router.post('/', hotelCatalogue.createHotel);

 module.exports = router;