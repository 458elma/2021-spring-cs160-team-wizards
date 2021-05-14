import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SessionScreen from './screens/SessionScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import SessionListScreen from './screens/SessionListScreen'
import SessionEditScreen from './screens/SessionEditScreen'


const App = () => {

  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/signup' component={SignupScreen} />
          <Route path='/users/:id/profile' component={ProfileScreen} />
          <Route path='/sessions/:id' component={SessionScreen} />

          <Route path='/users' component={UserListScreen} />
          <Route path='/users/:id/edit' component={UserEditScreen} />
          <Route
            path='/sessions'
            component={SessionListScreen}
            exact
          />
          <Route
            path='/sessions/:pageNumber'
            component={SessionListScreen}
            exact
          />
          <Route path='/sessions/:id/edit' component={SessionEditScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>

      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
