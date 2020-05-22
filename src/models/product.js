const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        default:'Product is self describable!'
    },
    price:{
        type: Number,
        required: true
    },
    productImage:{
        type: String
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);