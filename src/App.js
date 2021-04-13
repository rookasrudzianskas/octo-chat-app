import React from 'react';
// import 'rsuite/lib/styles/index.less';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import { Switch } from "react-router";
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Switch>
        <PublicRoute path={"/signin"}>
            <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
            <Home />
        </PrivateRoute>
    </Switch>
  );
}

export default App;
