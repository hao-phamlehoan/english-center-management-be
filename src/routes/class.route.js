const express = require('express')
const router = express.Router()
const classController = require('../controllers/class.controller')

router.get('/all', classController.getAll)
router.get('/:id', classController.get)
router.get('/student/:id', classController.getClassInClass)
router.delete('/:id', classController.delete)
router.post('/create', classController.create)
router.patch('/:id', classController.update)

module.exports = router