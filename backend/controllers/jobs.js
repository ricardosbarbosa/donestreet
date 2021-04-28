var github = require('../services/github')

const list = async (req, res) => {
  const response = await github.getGithubJobspositions(req.query)
  res.json(response.data);
}

module.exports = {
  list
}