import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'
import Restaurants from './pages/Restaurants'
import Travel from './pages/Travel'
import Login from './pages/Login'

function App() {
  return (
    <Router>
    <>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/restaurants' component={Restaurants} />
        <Route path='/travel' component={Travel} />
        <Route path='/login' component={Login} />
      </Switch>
    </>

    <Footer />

  </Router>
  );
}

export default App;
