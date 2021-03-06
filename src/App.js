import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';

import Contacts from './components/contacts/Contacts';
import Test from './components/test/Test';
import About from './components/pages/About'
import Header from './components/layout/Header';
import { Provider } from './context';
import NotFound from './components/pages/NotFound'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import EditContact from './components/contacts/EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router >
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path='/' component={AddContact} />
                <Route path='/contact' component={Contacts} />
                <Route path='/edit/:id' component={EditContact} />
                <Route path='/about' component={About} />
                <Route path='/test' component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
