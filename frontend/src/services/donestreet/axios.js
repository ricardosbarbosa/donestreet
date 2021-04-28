const Axios = require("axios");

var axios = Axios.create({
  baseURL: 'http://localhost:4000/'
});

export default axios