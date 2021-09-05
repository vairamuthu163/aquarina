import React from "react";
import SignUp from "./components/signup/SignUp";
import Home from './components/home/Home'
import Login from './components/login/Login';
import { AuthProvider } from "./contexts/AuthContext";
import {withRouter, Route, Switch,Redirect} from 'react-router-dom';
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import UpdateProfile from "./components/updateprofile/UpdateProfile";
//import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./components/navbar/Navbar";
import "./App.css";
import Products from "./components/products/Products";
import Plants from "./components/products/plants/Plants";
import Filters from "./components/products/filters/Filters";
import Fishes from "./components/products/fishes/Fishes";
import Substrates from './components/products/substrates/Substrates'
import FishDetails from "./components/products/fishes/fishdetails/FishDetails";


import { connect } from "react-redux";


const mapStateToProps = (state) =>{
  return {
    categories : state.categories,
    fishes : state.fishes
  }
}

function MainComponent(props) {

  const FishWithId = () =>{
    return(
      <FishDetails />
    )
    
  }
  const HomePage = () =>{
    return(
      <Home 
        categories = {props.categories}
      />
    )
  }
  const FishWithData = () =>{
    return(
      <Products fishes = {props.fishes} />
    )
  }
  return ( 
        <AuthProvider>
          <NavBar />
          <Switch>
          {/*  <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} /> */}
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword}/>
            <Route exact path='/products/fishes/:fishId' component={FishWithId} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/products/plants' component={Plants} />
            <Route exact path='/products/filters' component={Filters} />
            <Route exact path='/products/fishes' component={FishWithData} />
            <Route exact path='/products/substrates' component={Substrates} /> 
            <Redirect to='/home' /> 
          </Switch> 
        </AuthProvider> 
  );
}

export default withRouter(connect(mapStateToProps)(MainComponent));
