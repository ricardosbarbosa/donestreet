const axios = require("axios");

var github = axios.create({
  baseURL: 'https://jobs.github.com/',
  timeout: 1000,
});

const getGithubJobspositions = (params) => {
  return github.get("/positions.json", {
    params
  })
}

module.exports = {
  getGithubJobspositions
}