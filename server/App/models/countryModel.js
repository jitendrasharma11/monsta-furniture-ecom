let mongoose = require("mongoose")

let countrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        unique: true,
        required: true,
        minLength: 2
    },
    countryOrder: Number,
    countryStatus: Boolean
})

let countryModel = mongoose.model("country", countrySchema)

module.exports = {countryModel}