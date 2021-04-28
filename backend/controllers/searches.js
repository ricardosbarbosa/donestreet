const Searches = require('../models/searches')

const list = async (req, res) => {
  try {
    const searches = await Searches.find({})
    res.json(searches)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const get = async (req, res) => {
  try {
    const searches = await Searches.findById(req.params.id)
    res.json(searches)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const create = async (req, res) => {
  try {
    var ipaddress = req.ip === '::1' ? "127.0.0.1" : req.ip;
    const search = await Searches.create({
      ...req.body,
      ipaddress
    })
    res.json(search)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const update = async (req, res) => {
  try {
    await Searches.updateOne({ _id: req.params.id }, req.body, { new: true })
    const search = await Searches.findOne({ _id: req.params.id })
    res.json(search)
  } catch (error) {
    res.status(500).json({ error })
  }
}

const destroy = async (req, res) => {
  try {
    await Searches.deleteOne({ _id: req.params.id })
    res.json()
  } catch (error) {
    res.status(500).json({ error })
  }
}


module.exports = {
  list,
  get,
  create,
  update,
  destroy
}