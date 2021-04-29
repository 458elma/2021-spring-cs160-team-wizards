//import bcrypt from 'bcryptjs'

const tutors = [

    {
        _id: '1',
        name: 'Tutor 1',
        email: 'jane@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user1.jpg',
        gender: 'male',
        description: 'English Tutor',
    },
    {
        _id: '2',
        name: 'Tutor 2',
        email: 'joe@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user2.jpg',
        gender: 'male',
        description: 'International Tutor',


    },
    {
        _id: '3',
        name: 'Tutor 3',
        email: 'jerry@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user3.jpg',
        gender: 'female',
        description: 'Web Developer Tutor',

    },
    {
        _id: '4',
        name: 'Tutor 4',
        email: 'jack@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user4.jpg',
        gender: 'female',
        description: 'CS Tutor',

    },
    {
        _id: '5',
        name: 'Tutor 5',
        email: 'john@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user5.jpg',
        gender: 'female',
        description: 'Volunteer Tutor',
    },

    {
        _id: '6',
        name: 'Tutor 6',
        email: 'jason@sjsu.edu',
        password: '123456',//bcrypt.hashSync('123456', 12),
        profileImage: '/images/user6.jpg',
        gender: 'male',
        description: 'Retired University Professor',

    },
]
export default tutors