import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

function App() {
  const logout =() => {
    localStorage.removeItem('token');
  }
  return (
    <div className="App">
      <Link to='/friends'><h1>Friends</h1></Link>
      <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink onClick={logout}>Logout</NavLink>
      </nav>

      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <PrivateRoute path='/friends/add' component={AddFriendForm} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
