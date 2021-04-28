const app = require("./app");
const database = require('./database')

database.connect().then(() => {
  app.listen(4000, () => {
    console.log(`Listening http on ${4000}...`)
  })
})
