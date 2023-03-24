const express = require('express')
const router = express.Router()
const lessonController = require('../controllers/lesson.controller')

router.get('/all', lessonController.getAll)
router.get('/:id', lessonController.get)
router.delete('/:id', lessonController.delete)
// router.post('/create', lessonController.create)
// router.patch('/:id', lessonController.update)

module.exports = router