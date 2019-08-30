const subject = require('./subject')

class Student {
    constructor(id,firstName,lastName,GPA,credit) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.schedule = []
        this.GPA = GPA
        this.credit = credit
    }
}

let students = []

function mockStudent(){
    students.push(createStudent(59161166,"Narawit","Rattanasuriya",3.90,105))
    students.push(createStudent(59161167,"Jotaro","Rattanasuriya",3.99,35))
    students.push(createStudent(59161168,"Jimmy","Rattanasuriya",3.88,108))
}

function createStudent(id,firstName,lastName,GPA,credit) {
    let s = new Student(id,firstName,lastName,GPA,credit)
    return s
}

function enroll(id,enrollSubject){
    let searchId = searchStudent(id)
    for(let i = 0 ; i < enrollSubject.length ; i++){
        students[searchId].schedule.push(subject.getSubject(enrollSubject[i]))
    }
    return true
}

function getSchedule(id){
    let searchId = searchStudent(id)
    let s = students[searchId]
    return s.schedule
}

function searchStudent(id){
    for(let i = 0 ; i < students.length ; i++){
        if(students[i].id==id){
            return i
        }
    }
    return null
}

function getStudentProfile(id){
    let searchId = searchStudent(id)
    let s = students[searchId]
    return s
}

function calculateGPA(studentId,subjects){
    let searchId = searchStudent(studentId)
    let GP = students[searchId].GPA * students[searchId].credit
    let calGPA = 0
    let sumCredit = students[searchId].credit
    for(let i = 0 ; i<subjects.length ; i++){
        let credit = subject.getSubjectCredit(subjects[i].subjectId)
        GP += subjects[i].grade * credit
        sumCredit += credit
    }
    calGPA = GP/sumCredit
    return calGPA.toFixed([2])
}

module.exports.enroll = enroll
module.exports.mockStudent = mockStudent
module.exports.getSchedule = getSchedule
module.exports.getStudentProfile = getStudentProfile
module.exports.calculateGPA = calculateGPA