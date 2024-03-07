const Review = require('../models/review.model')
const mongoose = require('mongoose')

// GET all reviews
const getReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({createdAt: -1})
    
    res.status(200).json(reviews)
}

// GET a single review
const getReview = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such Review'})
    }

    const review = await Review.findById(id)
    
    if(!review) {
        return res.status(404).json({error: 'no such Review'})
    }

    res.status(200).json(review)
}

// POST a new review
// const createReview = async (req, res) => {
//     const {} = req.body

//     try { // add doc to db
//         const review = await Review.create({});
//         res.status(200).json(review);
//     } catch (error){
//         res.status(400).json({error: error.message})
//     }
// }

// DELETE a review
const deleteReview = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such Review'})
    }

    const review = await Review.findOneAndDelete({_id: id})

    if(!review) {
        return res.status(404).json({error: 'no such Review'})
    } 

    res.status(200).json(review)
}

// UPDATE a review
const updateReview = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such Review'})
    }

    const review = await Review.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!review) {
        return res.status(404).json({error: 'no such Review'})
    } 

    res.status(200).json(review)
}

module.exports = {
    getReviews,
    getReview,
    //createReview,
    deleteReview,
    updateReview
}
