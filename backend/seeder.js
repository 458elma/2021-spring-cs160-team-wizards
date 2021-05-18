import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import users from './data/users.js'
import sessions from './data/sessions.js'
import Session from './models/sessionModel.js'
import User from './models/userModel.js'
// import Dashboard from './models/dashboardModel.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany();
        await Session.deleteMany();
        // await Dasboard.deleteMany();

        const newUsers = await User.insertMany(users) //insert users to db


        const tutorID = newUsers[0]._id
        const studentIDs = newUsers.map(u => u._id)
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
        await User.deleteMany();
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
