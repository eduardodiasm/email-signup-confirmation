const jwt = require('jsonwebtoken');
const activateTokenKey = process.env.ACTIVATE_TOKEN_KEY 

const { UserModel } = require('../../../infra/database/models')

function userService (emailDependency) {

  async function createUser (params) {

    try {

      const user = await UserModel.create(params)
      const activateToken = await encodeSignUpActivateToken(user)
      emailDependency.sendEmailSignUpConfirmation(user, activateToken)

      return user

    } catch (error) {
      console.log(error)
      throw new Error('An error occurs, please try again :)')
    }

  }

  async function confirmSignUp (activateToken) {
    
    const decodedToken = await decodeRegistrationToken(activateToken)

    if (!decodedToken) throw new Error('Invalid activation code')

    const { email } = decodedToken
    
    const user = await UserModel.findOne({
      where: {
        email
      }
    })
    
    if (!user) throw new Error('Are you kidding me? ;-;')

    await user.update({ active: true })

    return user

  }

  async function encodeSignUpActivateToken (user) {
  
    const info = { email: user.email }
    const token = await jwt.sign(
      info, activateTokenKey, { expiresIn: 60 * 60 }
    )

    return token
  }

  async function decodeRegistrationToken(token) {   
    const decodedToken = await jwt.verify(token, activateTokenKey)
    return decodedToken
  }

  return {
    createUser,
    confirmSignUp
  }

}

module.exports = userService