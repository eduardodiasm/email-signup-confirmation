require('./config/environments/').setEnvironment()

const app = require('./app')
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server running on environment: ${process.env.NODE_ENV}`)
})