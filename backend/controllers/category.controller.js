const category = require('../models/category.model') 


// get all categories
const getCategories = async (req, res) => {
    const categories = await Category.find({}).sort({createdAt: -1})
}
// get a single category

// create a new category
const createCategory = async (req, res) => {
    // const {title, load, reps} = req.body

    // // add doc to db
    // try {
    //     const workout = await Workout.create({title, load, reps})
    //     rest.status(200).json(workout)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }

}
// delete a category

// update a category

module.exports = {
    createCategory //,
    // another function to export
}