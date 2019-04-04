import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="test@yahoo.com" phone="000-000-0000" />
          <Contact name="John Doe" email="test@yahoo.com" phone="000-000-0000" />
        </div>
      </div>

    );
  }
}

export default App;
