import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import ReduxStore from './redux/Store'
import './components/common/sidebar/Sidebar'
import Sidebar from './components/common/sidebar/Sidebar';
import Header from './components/common/header/Header';

import Properties from './components/properties/Properties';
import PropertyDetail from './components/properties/propertyDetail/PropertyDetail'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Provider store={ReduxStore}>
      <Router>

        <Header/>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Properties />
          </Route>
          <Route exact path="/details/:id" component={PropertyDetail} />

        </Switch>
      </Router>
    </Provider >

  );
}

export default App;
