const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://areeb:areeb@cluster0.1k8nwfm.mongodb.net/+billing')
    .then(() => console.log("connected to mongodb database...."))
    .catch((err) => console.log("error", err));

module.exports = mongoose