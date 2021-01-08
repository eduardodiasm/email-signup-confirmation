const nodemailer = require('../../../config/nodemailer')
const mockedActivateRoute = 'http://localhost:3333/users/sign-up-confirmation'

function mailService () {

  async function sendEmailSignUpConfirmation (user, activateToken) {

    const email = await nodemailer.sendMail({
      from: 'Cool Company (CC) <company@cool.com.br>',
      to: `${user.email}`,
      subject: 'Sign up confirmation',
      html: `Hi! If you have registered in our platform, please confirm clicking in this link: ${mockedActivateRoute}/${activateToken}`
    })

    return email

  }

  return {
    sendEmailSignUpConfirmation
  }

}

module.exports = mailService