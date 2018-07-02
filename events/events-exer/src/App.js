import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SignUpForm from './components/SignUpForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUpForm />
      </div>
    );
  }
}

export default App;
