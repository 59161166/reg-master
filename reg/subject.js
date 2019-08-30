class Subject {
    constructor(id,name,startTime,stopTime,day,room,instructor,credit) {
        this.startTime = startTime
        this.stopTime = stopTime
        this.name = name
        this.id = id
        this.day = day
        this.instructor = instructor
        this.credit = credit
        this.room = room
    }
}

let subjects = []

function mockSubject(){
    subjects.push(new Subject(88700159,"WEB API","08.00","12.00","Mon","IF-301","Nutthanon",3))
    subjects.push(new Subject(88700259,"Software Testing","08.00","12.00","Tue","IF-302","Aekkapop",3))
    subjects.push(new Subject(88700359,"IoT","08.00","12.00","Wed","IF-302","Nutthanon",3))
    subjects.push(new Subject(88700459,"programming 1","08.00","12.00","Fri","IF-301","Aekkapop",2))
}

function getSubject(id){
    let subId = searchSubject(id)
    return subjects[subId]
}

function getSubjectCredit(id){
    let subId = searchSubject(id)
    return subjects[subId].credit
}

function getAllSubject(){
    return subjects
}

function searchSubject(id){
    for(let i = 0 ; i < subjects.length ; i++){
        if(subjects[i].id==id){
            return i
        }
    }
    return null
}

function getRoomSubject(roomName){
    let roomSubjects = []
    for(let i = 0 ; i < subjects.length ; i++){
        if(subjects[i].room==roomName){
            roomSubjects.push(subjects[i])
        }
    }
    if(roomSubjects.length>0){
        return roomSubjects
    }
    else{
        return null
    }
}

function getInstructorSubject(instructorName){
    let tmpSubjects = []
    for(let i=0 ; i<subjects.length ; i++){
        if(subjects[i].instructor==instructorName){
            tmpSubjects.push(subjects[i])
        }
    }
    if(tmpSubjects.length>0){
        return tmpSubjects
    }
    else{
        return null
    }
}

module.exports.mockSubject = mockSubject
module.exports.getSubject = getSubject
module.exports.getAllSubject = getAllSubject
module.exports.getRoomSubject = getRoomSubject
module.exports.getInstructorSubject = getInstructorSubject
module.exports.getSubjectCredit = getSubjectCredit