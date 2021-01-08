const router = require('express').Router()
const emailService = require('../domain/external/email/')()

// Injecting the email dependency
const userService = require('../domain/users/service')(
  emailService
)

router.post('/', async (req, res) => {

  const { email, password } = req.body

  userService.createUser({ email, password })
    .then(user => res.json(user))

})

router.get('/sign-up-confirmation/:token', async (req, res) => {

  const activateToken = req.params.token

  userService.confirmSignUp(activateToken)
   .then(res.status(204).send())

})

module.exports = router