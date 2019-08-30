const request = require('supertest')
const chai = require('chai')

const app = require('../app')
chai.should()

describe('GET /student/:id/schedule', () => {
    it('should return array of schedule', (done) => {
        request(app).get('/student/59161166/schedule')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s[0].should.have.property('startTime')
                s[0].should.have.property('stopTime')
                s[0].should.have.property('id')
                s.should.be.an('array')
                done()
            })
    })
})

describe('GET /student/:id/profile', () => {
    it('input is studentID output is student profile', (done) => {
        request(app).get('/student/59161166/profile')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s.should.have.property('firstName')
                s.should.have.property('lastName')
                s.schedule.should.be.an('array')
                s.should.be.an('object')
                done()
            })
    })
})

describe('GET /subject/:id', () => {
    it('input is subjectID output is detail of subject', (done) => {
        request(app).get('/subject/88700159')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s.should.have.property('startTime')
                s.should.have.property('stopTime')
                s.should.have.property('id')
                s.should.have.property('credit')
                s.should.have.property('instructor')
                s.should.have.property('room')
                s.should.have.property('name')
                s.should.be.an('object')
                done()
            })
    })
})

describe('GET /subjects', () => {
    it('it should return array of all subjects', (done) => {
        request(app).get('/subjects')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s[0].should.have.property('startTime')
                s[0].should.have.property('stopTime')
                s[0].should.have.property('id')
                s[0].should.have.property('credit')
                s[0].should.have.property('instructor')
                s[0].should.have.property('room')
                s[0].should.have.property('name')
                s.should.have.lengthOf(4);
                s.should.be.an('array')
                done()
            })
    })
})

describe('GET /instructor/:name/schedule', () => {
    it('it should return array of subjects teached by instructor when input is instructor name', (done) => {
        request(app).get('/instructor/Nutthanon/schedule')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s.should.be.an('array')
                s.should.have.lengthOf(2);
                s[0].should.have.property('startTime')
                s[0].should.have.property('stopTime')
                s[0].should.have.property('id')
                s[0].should.have.property('credit')
                s[0].should.have.property('instructor')
                s[0].should.have.property('room')
                s[0].should.have.property('name')
                done()
            })
    })
})

describe('GET /instructors', () => {
    it('it should return array of instructor name', (done) => {
        request(app).get('/instructors')
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s.should.be.an('array')
                s.should.have.lengthOf(2);
                done()
            })
    })
})

describe('POST /student/:id/calculateGPA', () => {
    it('it should return calculated GPA when input is array of grade of subjects', (done) => {
        request(app).get('/student/59161166/calculateGPA')
            .type('form')
            .send([
                {"subjectId": 88700359, "grade": "1.5"},
                {"subjectId": 88700459, "grade": "4"}
                ])
            .expect(200)
            .end((err, res) => {
                let s = res.body
                s.should.not.be.NaN
                done()
            })
    })
})

describe('POST /student/:id/enroll', () => {
    it('it should return 200 OK and student should have more subject in schedule', (done) => {
        request(app).post('/student/59161166/enroll')
            .type('form')
            .send([88700359,88700459])
            .expect(201, done)
    })
})