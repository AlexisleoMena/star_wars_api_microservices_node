const mongoose = require('mongoose')
const { MONGO_URL } = require('../utils/config/envs')

const conn = mongoose.createConnection(MONGO_URL)

module.exports = {
	Character: conn.model('Character', require('./schemas/characterSchema')),
	Film: conn.model('Film', require('./schemas/filmSchema')),
	Planet: conn.model('Planet', require('./schemas/planetSchema'))
}

