const { UserModel } = require('../../../infra/database/models')

function userService () {

  async function createUser (params) {

    console.log(params)
    const user = await UserModel.create(params)
    return user

  }

  return {
    createUser
  }

}

module.exports = userService