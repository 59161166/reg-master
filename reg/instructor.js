const subject = require('./subject')

class Instructor {
    constructor(name) {
        this.name = name
    }
}

let instructors = []

function mockinstructor(){
    instructors.push(new Instructor("Natthanon"))
    instructors.push(new Instructor("Aekkapop"))
}

function getinstructorSchedule(instructorName){
    let subjects = subject.getInstructorSubject(instructorName)
    return subjects
}

function getAllinstructors(){
    return instructors
}

function getInstructor(name){
    let index = searchInstructor(name)
    return instructors[index]
}

function searchInstructor(name){
    for(let i = 0 ; i < instructors.length ; i++){
        if(instructors[i].name==name){
            return i
        }
    }
    return null
}

module.exports.mockinstructor = mockinstructor
module.exports.getinstructorSchedule = getinstructorSchedule
module.exports.getAllinstructors = getAllinstructors
module.exports.getInstructor = getInstructor
