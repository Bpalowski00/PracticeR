import React, { Component } from 'react';
// Components
import Contacts from './components/Contacts';
import Header from './components/Header'
import { Provider } from './context';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
