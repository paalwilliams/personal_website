import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoMatch from './components/Utils/NoMatch';
import Post from './components/Posts/Post';
import Posts from './components/Posts/Posts';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import { useStore } from './Context/store';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  const { state, dispatch } = useStore();
  return (
    <div className='App'>
      <Router>
        {state.hamburger ? <MobileMenu /> : ''}
        {state.contact ? <Contact /> : ''}
        <Header />
        <div id='page-body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog/post/:id' component={Post} />
            <Route exact path='/blog' component={Posts}></Route>
            <Route exact path='/contact'></Route>
            <Route exact path='/about' component={About} />
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
