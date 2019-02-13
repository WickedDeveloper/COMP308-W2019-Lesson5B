let mongoose = require('mongoose');

// Create a model class
let aboutSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favouritethings"
});

module.exports = mongoose.model('davidgwyn', aboutSchema);