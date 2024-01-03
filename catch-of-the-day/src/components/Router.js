import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  //switch tag: If it does not match the first router, it checks the next route and so on, else it falls back to the not-found route
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={StorePicker}></Route>
    <Route path="/store/:storeId" component={App}></Route>
    <Route component={NotFound}></Route>
  </Switch>
</BrowserRouter>

)

export default Router;
