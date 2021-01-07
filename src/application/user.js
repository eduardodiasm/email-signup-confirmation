const router = require('express').Router()
const userService = require('../domain/users/service')()

router.post('/', async (req, res) => {

  const { email, password } = req.body

  const user = await userService.createUser({ email, password })

  return res.json(user)
})

module.exports = router