
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import StudentScreen from './screens/StudentScreen.js'
import TutorScreen from './screens/TutorScreen.js'
import AdminStudentScreen from './screens/AdminStudentScreen.js'
import AdminTutorScreen from './screens/AdminTutorScreen'

const App = () => {
 
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/users/students/:id' component={StudentScreen}></Route>
          <Route path='/users/tutors/:id' component={TutorScreen}></Route>
          <Route path='/admins/students/:id' component={AdminStudentScreen}></Route>
          <Route path='/admins/tutors/:id' component={AdminTutorScreen}></Route>
        </Container>
        
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
