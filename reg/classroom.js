const subject = require('./subject')

class Classroom {
    constructor(buildingName,roomName,subject) {
        this.subject = subject
        this.buildingName = buildingName
        this.roomName = roomName
    }
}

let classrooms = []

function mockClassroom(){
    classrooms.push(new Classroom("Informatics","IF-301",subject.getRoomSubject()))
    classrooms.push(new Classroom("Informatics","IF-302",subject.getRoomSubject()))
}

function getClassroomSchedule(roomName){
    let room = searchClassroom(roomName)
    return classrooms[room]
}

function getAllClassrooms(){
    return classrooms
}

function searchClassroom(roomName){
    for(let i = 0 ; i < classrooms.length ; i++){
        if(classrooms[i].roomName==roomName){
            return i
        }
    }
    return null
}

function searchBuilding(buildingName){
    let tmpClassrooms = []
    for(let i = 0 ; i < classrooms.length ; i++){
        if(classrooms[i].buildingName==buildingName){
            tmpClassrooms.push(classrooms[i])
        }
    }
    if(tmpClassrooms.length>0){
        return tmpClassrooms
    }
    else{
        return null
    }
}

module.exports.mockClassroom = mockClassroom
module.exports.getClassroomSchedule = getClassroomSchedule
module.exports.getAllClassrooms = getAllClassrooms
module.exports.searchBuilding = searchBuilding