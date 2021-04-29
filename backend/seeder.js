import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import students from './data/students.js'
import tutors from './data/tutors.js'
import sessions from './data/sessions.js'
import Session from './models/sessionModel.js'
import Tutor from './models/tutorModel.js'
import Student from './models/studentModel.js'
// import Dashboard from './models/dashboardModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Tutor.deleteMany();
        await Student.deleteMany();
        await Session.deleteMany();
        // await Dasboard.deleteMany();

        const newTutors = await Tutor.insertMany(tutors) //insert tutors to db
        const newStudents = await Student.insertMany(students) //insert students to db


        const tutorID = newTutors[0]._id
        const studentIDs = newStudents.map(s => s._id)
        const newSessions = sessions.map(session => {
            return { ...session, tutor: tutorID, students: studentIDs }
        })

        await Session.insertMany(newSessions) //insert sessions to db
        console.log('Data imported')
        process.exit()
    } catch (e) {
        console.error(e)
        process.exit(-1)
    }
}

const destroyData = async () => {
    try {
        await Tutor.deleteMany();
        await Student.deleteMany();
        await Session.deleteMany();
        // await Dasboard.deleteMany();

        console.log('Data destroyed')
        process.exit()
    } catch (e) {
        console.error(e)
        process.exit(-1)
    }
}

if (process.argv[2] === '-destroy') {
    destroyData()
} else {
    importData()
}
