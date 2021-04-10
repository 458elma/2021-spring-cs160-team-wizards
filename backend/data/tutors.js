import bcrypt from 'bcryptjs'
const tutors = [

    {
        name: 'Tutor 1',
        email: 'jane@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        profileImage: '/images/user1.jpg',
        gender: 'male',
        description: 'English Tutor',
    },
    {
        name: 'Tutor 2',
        email: 'joe@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user2.jpg',
        gender: 'male',
        description: 'International Tutor',


    },
    {
        name: 'Tutor 3',
        email: 'jerry@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user3.jpg',
        gender: 'female',
        description: 'Web Developer Tutor',

    },
    {
        name: 'Tutor 4',
        email: 'jack@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user4.jpg',
        gender: 'female',
        description: 'CS Tutor',

    },
    {
        name: 'Tutor 5',
        email: 'john@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user5.jpg',
        gender: 'female',
        description: 'Volunteer Tutor',
    },

    {
        name: 'Tutor 6',
        email: 'jason@sjsu.edu',
        password: bcrypt.hashSync('123456', 12),
        image: '/images/user6.jpg',
        gender: 'male',
        description: 'Retired University Professor',

    },
]
export default tutors