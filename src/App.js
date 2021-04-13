import React from 'react';
// import 'rsuite/lib/styles/index.less';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import { Route, Switch } from "react-router";
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
        <Route path={"/signin"}>
            <SignIn />
        </Route>
        <PrivateRoute path="/">
            <Home />
        </PrivateRoute>
    </Switch>
  );
}

export default App;
