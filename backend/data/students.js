//import bcrypt from 'bcryptjs'

const students = [
  {
    _id: '1',
    name: 'Student 1',
    email: 'jane.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user1.jpg',
    gender: 'male',
    description: 'English Student',
  },
  {
    _id: '2',
    name: 'Student 2',
    email: 'joe.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user2.jpg',
    gender: 'male',
    description: 'International Student',


  },
  {
    _id: '3',
    name: 'Student 3',
    email: 'jerry.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user3.jpg',
    gender: 'female',
    description: 'Web Developer',

  },
  {
    _id: '4',
    name: 'Student 4',
    email: 'jack.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user4.jpg',
    gender: 'female',
    description: 'CS student',

  },
  {
    _id: '5',
    name: 'Student 5',
    email: 'john.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user5.jpg',
    gender: 'female',
    description: 'Low-income student',
  },

  {
    _id: '6',
    name: 'Student 6',
    email: 'jason.s@sjsu.edu',
    password: '123456',//bcrypt.hashSync('123456', 12),
    profileImage: '/images/user6.jpg',
    gender: 'male',
    description: 'Back to University Student',

  },
]

export default students