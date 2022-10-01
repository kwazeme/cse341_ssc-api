/*
*
*
*   Hotels Catalogue controller functions
*
*/

const { response} = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all southern sun hotels
const getHotels = async (req, res, next) => {
    const results = await mongodb.getDb().db().collection('hotel_catalogue').find();
    results.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};

// Post hotel Catalogue
const createHotel = async (req, res, next) => {
    const hotelInfor = {
    imageurl: req.body.imageurl,
    rating: req.body.rating,
    description: req.body.description,
    phone: req.body.phone,
    email: req.body.email,
    website: req.body.website,
    book_now: req.body.book_now
    };
    try {
      result = await mongodb.getDb().db().collection('hotel_catalogue').insertOne(hotelInfor);
      const hotelId = ObjectId(req.params.id);
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response) && `New Hotel added _id ${hotelId} added to catalogue.`;
      // console.log(response);
    } catch (error) {
      res.status(500).json(response) || 'Hotel not added to catalogue, try again.';
    }};
  




module.exports = {
    getHotels,
    createHotel
}

