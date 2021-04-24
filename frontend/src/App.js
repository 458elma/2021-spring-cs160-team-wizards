
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import StudentScreen from './screens/StudentScreen.js'
import UserScreen from './screens/UserScreen.js'
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
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/users/:id' component={UserScreen}></Route>
          <Route path='/admins/:id' component={AdminUserScreen}></Route>
          <Route path='/infoEditor/admins/:id' component={EditInfoScreen}></Route>
          <Route path='/reviewView/admins/:id' component={ViewReviewScreen}></Route>
          <Route path='/reviewWriter/users/:id' component={WriteReviewScreen}></Route>
        </Container>
        
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
