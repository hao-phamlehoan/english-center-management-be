const userRoute = require('./user.route')

const route = (app) => {
  app.use('/user', userRoute)
}

module.exports = route