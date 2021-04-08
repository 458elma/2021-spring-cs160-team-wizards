
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import UserScreen from './screens/UserScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import SignUpScreen from './screens/SignUpScreen.js'

const App = () => {
 
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/signup' component={SignUpScreen}/>
        <Route path='/search/:keyword' component={HomeScreen}/>
        <Route path='/users/:id' component={UserScreen}/>
        <Route path='/' component={HomeScreen} exact/>
        </Container>
        
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
