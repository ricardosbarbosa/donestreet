var mongoose = require('mongoose')

const SearchesSchema = new mongoose.Schema({
  // time: { type: String, required: true },
  description: { type: String, required: true },
  location : { type: String, required: true },
  ipaddress: { type: String, required: true },
})

const Searches = mongoose.model('Searches', SearchesSchema)

module.exports = Searches