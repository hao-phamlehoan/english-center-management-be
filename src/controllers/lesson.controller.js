const LessonModel = require('../models/lesson.model')
const LessonView = require('../views/lesson.view')

const lessonModel = new LessonModel()
const lessonView = new LessonView()

class LessonController {
    getAll(req, res) {
        lessonModel.getAll((lessons) => {
            lessonView.getAll(res, lessons)
        })
    }

    get(req, res) {
        let id = Number.parseInt(req.params.id)
        lessonModel.get(id, (status, Lesson) => {
            lessonView.get(res, status, Lesson)
        })
    }

    // update(req, res) {
    //     let id = Number.parseInt(req.params.id)
    //     let editedLesson = req.body

    //     lessonModel.update(id, editedLesson, (status, result, message) => {
    //         lessonView.update(res, status, result, message)
    //     })
    // }

    // create(req, res) {
    //     let newLesson = req.body
    //     lessonModel.create(newLesson, (status, result, message) => {
    //         lessonView.create(res, status, result, message)
    //     })
    // }

    delete(req, res) {
        let id = Number.parseInt(req.params.id)
        lessonModel.delete(id, (status, result, message) => {
            lessonView.delete(res, status, result, message)
        })
    }
}

module.exports = new LessonController