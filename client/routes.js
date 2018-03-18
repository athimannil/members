import React from 'react';
import { Route, IndexRoute } from "react-router";
import App from './components/App';

import { Home } from './components/home/Home';
import Members from './components/members/Members';
import ManageMembers from './components/members/ManageMembers';
import { About } from './components/about/About';

export default (
  <Route path={"/"} component={App} >
    <IndexRoute component={Home} />
    <Route path='/members' component={Members} />
    <Route path='/member' component={ManageMembers} />
    <Route path='/member/:id' component={ManageMembers} />
    <Route path='/about' component={About} />
  </Route>
);
