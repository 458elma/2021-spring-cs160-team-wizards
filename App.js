
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeScreen from './screens/HomeScreen.js'
import UserScreen from './screens/UserScreen.js'


const App = () => {
 
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/users/:id' component={UserScreen}></Route>
        </Container>
        
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
