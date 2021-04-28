const mongoose = require('mongoose')

mongoose.Promisse = global.Promise

module.exports = {
  mongoose,
  connect: () => {
    const uri = "mongodb+srv://ricardo:m0I6kuWQMjIwHhNV@cluster0.cwwtb.gcp.mongodb.net/donestreet?retryWrites=true&w=majority";
    mongoose.Promise = Promise
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  },
  disconnect: (done) => {
    mongoose.disconnect(done)
  }
}
