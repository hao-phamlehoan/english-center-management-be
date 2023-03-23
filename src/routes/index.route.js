const userRoute = require('./user.route')
const studentRoute = require('./student.route.js')


const route = (app) => {
  app.use('/user', userRoute)
  app.use('/student', studentRoute)
}

module.exports = route