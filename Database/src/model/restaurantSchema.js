const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    Items : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Item'
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema);