import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import { Header } from './header/Header';
import { Home } from './home/Home';
import Members from './members/Members';
import ManageMembers from './members/ManageMembers';
import { About } from './about/About';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/members' component={Members}/>
          <Route path='/member' component={ManageMembers} />
          <Route path='/member/:id' component={ManageMembers} />
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    );
  }
}

// App.propTypes = {
//   children: propTypes.object.isRequired
// }

export default App;
