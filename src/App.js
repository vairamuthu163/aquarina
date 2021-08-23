import React from "react";
import SignUp from "./components/signup/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/login/Login';
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import UpdateProfile from "./components/updateprofile/UpdateProfile";
//import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
         {/*  <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} /> */}
          <Route exact path='/' component={Dashboard} />
          <Route path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword}/>
          <Route path='/navbar' component={NavBar} />
          <Redirect to='/' />

        </Switch> 
      </AuthProvider>
    </Router>
  );
}

export default App;
