import bcrypt from 'bcryptjs'

const students = [
  {
    name: 'Student 1',
    email: 'jane.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user1.jpg',
    gender: 'male',
    description: 'English Student',
  },
  {
    name: 'Student 2',
    email: 'joe.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user2.jpg',
    gender: 'male',
    description: 'International Student',


  },
  {
    name: 'Student 3',
    email: 'jerry.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user3.jpg',
    gender: 'female',
    description: 'Web Developer',

  },
  {
    name: 'Student 4',
    email: 'jack.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user4.jpg',
    gender: 'female',
    description: 'CS student',

  },
  {
    name: 'Student 5',
    email: 'john.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user5.jpg',
    gender: 'female',
    description: 'Low-income student',
  },

  {
    name: 'Student 6',
    email: 'jason.s@sjsu.edu',
    password: bcrypt.hashSync('123456', 12),
    profileImage: '/images/user6.jpg',
    gender: 'male',
    description: 'Back to University Student',

  },
]

export default students
