const mongoose = require('mongoose');
const cakeSchema = new mongoose.Schema(
{
    name : String,
    price: Number,
    weight: Number,
    flavor: String,
    instock : Number,
    reviews: [
      {
        user: String,
        rating: Number,
        comment: String,
        date: Date
      }
    ]
  }
)