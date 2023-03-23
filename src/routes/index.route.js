const userRoute = require('./user.route')
const studentRoute = require('./student.route')
const classRoute = require('./class.route')


const route = (app) => {
  app.use('/user', userRoute)
  app.use('/student', studentRoute)
  app.use('/class', classRoute)
}

module.exports = route