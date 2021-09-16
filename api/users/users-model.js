// const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  getAll,
  getById,
}

function getAll() {
  return('users')
}

function getById(id) {
  return ('users').where('id', id).first()
}

async function insert(hobbit) {
  return ('users')
  .insert(hobbit)
  .then(([id]) => {
    return getById(id)
  })
}

