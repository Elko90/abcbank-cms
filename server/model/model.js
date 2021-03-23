const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    pno:{
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
    },
    accno:{
        type: String,
        required: true,
        unique: true,
    }
    // TIMESTAMPS: TRUE, this is to add created date and update time in mongodb schema but somehow we didnt make it work...
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;