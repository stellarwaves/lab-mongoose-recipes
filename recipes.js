const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

const recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
    required: false
  },
  ingredients: {
    type: Array,
    required: true
  },
  cousine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    required: false
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg.',
    required: false
  },
  duration: {
    type: Number,
    min: 0,
    required: false
  },
  creator: {
    type: String,
    required: false
  },
  created: {
    type: Date,
    default: Date.now,
    required: false
  }
})

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });
