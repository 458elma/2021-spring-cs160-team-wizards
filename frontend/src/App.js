
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import UserScreen from './screens/UserScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import SignUpScreen from './screens/SignUpScreen.js'
import StudentScreen from './screens/StudentScreen.js'
import AdminStudentScreen from './screens/AdminStudentScreen.js'
import AdminUserScreen from './screens/AdminUserScreen'
import EditInfoScreen from './screens/EditInfoScreen'
import ViewReviewScreen from './screens/ViewReviewScreen'
import WriteReviewScreen from './screens/WriteReviewScreen'

const App = () => {
 
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact/>
	      <Route path='/search/:keyword' component={HomeScreen}/>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/signup' component={SignUpScreen}/>
        <Route path='/users/:id' component={UserScreen}/>
        <Route path='/admins/:id' component={AdminUserScreen}/>
        <Route path='/infoEditor/admins/:id' component={EditInfoScreen}/>
        <Route path='/reviewView/admins/:id' component={ViewReviewScreen}/>
        <Route path='/reviewWriter/users/:id' component={WriteReviewScreen}/>
        </Container>
        
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
