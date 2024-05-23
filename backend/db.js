const mongoose = require("mongoose");
var mongooseURL = 'mongodb+srv://dejeneyohannes0:dan-intern@cluster0.9xpqs4u.mongodb.net/danenrgy'
mongoose.connect(mongooseURL)
var connection = mongoose.connection
connection.on('error', () => {
    console.log('mongo db connection failed')
})
connection.on('connected', () => {
    console.log('mongo db connected succesfully')
})
module.exports = mongoose
