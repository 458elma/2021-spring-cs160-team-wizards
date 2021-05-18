import bcrypt from 'bcryptjs'
const users = [

    {
        name: 'User 1',
        email: 'jane@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        profileImage: '/images/user1.jpg',
        gender: 'male',
        description: 'English Tutor',
    },
    {
        name: 'User 2',
        email: 'joe@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user2.jpg',
        gender: 'male',
        description: 'International Tutor',


    },
    {
        name: 'User 3',
        email: 'jerry@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user3.jpg',
        gender: 'female',
        description: 'Web Developer Tutor',

    },
    {
        name: 'User 4',
        email: 'jack@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user4.jpg',
        gender: 'female',
        description: 'CS Tutor',

    },
    {
        name: 'User 5',
        email: 'john@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user5.jpg',
        gender: 'female',
        description: 'Volunteer Tutor',
    },

    {
        name: 'User 6',
        email: 'jason@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user6.jpg',
        gender: 'male',
        description: 'Retired University Professor',

    },
]
export default users