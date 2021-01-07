const { join } = require('path')

function setEnvironment () {
  const path = join(__dirname, process.env.NODE_ENV + '.env')

  require('dotenv').config({
    path
  })
}

module.exports = {
  setEnvironment
}
