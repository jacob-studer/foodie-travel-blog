import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
    <>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </>

    <Footer />

  </Router>
  );
}

export default App;
