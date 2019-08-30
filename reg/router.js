const express = require('express')
const router = express.Router()
const student = require('./student')
const subject = require('./subject')
const instructor = require('./instructor')
const classroom = require('./classroom')


student.mockStudent()
subject.mockSubject()
instructor.mockinstructor()
classroom.mockClassroom()
student.enroll(59161166,[88700159,88700259])

router.get('/student/:id/schedule', (req, res) => {
    let id = req.params.id
    res.send(student.getSchedule(id))
})

router.get('/student/:id/profile', (req,res)=>{
    let id = req.params.id
    res.send(student.getStudentProfile(id))
})

router.get('/subject/:id', (req, res) => {
    let id = req.params.id
    res.send(subject.getSubject(id))
})

router.get('/subjects', (req, res) => {
    res.send(subject.getAllSubject())
})

router.get('/instructor/:name/schedule', (req, res) => {
    let name = req.params.name
    res.send(instructor.getinstructorSchedule(name))
})

router.get('/instructors', (req, res) => {
    res.send(instructor.getAllinstructors())
})

router.get('/instructors', (req, res) => {
    res.send(instructor.getAllinstructors())
})

router.post('/student/:id/calculateGPA',function (req,res){
    let calGPA = student.calculateGPA(req.params.id,req.body)
    res.status(200).send(calGPA)
})

router.post('/student/:id/enroll',function (req,res){
    let success = student.enroll(req.params.id,req.body)
    if(!success){
        res.status(400).send({error:'enroll is unsuccesfully'})
        return
    }
    res.sendStatus(201)
})

module.exports = router