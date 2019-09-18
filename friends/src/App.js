import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriendFormWithRouter from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to='/friends'><h1>Friends</h1></Link>
      {/* <Link to="/login">Login</Link> */}

      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <PrivateRoute path='/friends/add' component={AddFriendFormWithRouter} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
