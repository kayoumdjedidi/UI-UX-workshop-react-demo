import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <h2>Welcome</h2>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
