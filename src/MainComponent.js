import React,{useEffect} from "react";
import SignUp from "./components/signup/SignUp";
import Home from './components/home/Home'
import Login from './components/login/Login';
import { AuthProvider } from "./contexts/AuthContext";
import {withRouter, Route, Switch,Redirect} from 'react-router-dom';
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import UpdateProfile from "./components/updateprofile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Products from "./components/products/Products";
import Plants from "./components/products/plants/Plants";
import Filters from "./components/products/filters/Filters";
import Fishes from "./components/products/fishes/Fishes";
import Substrates from './components/products/substrates/Substrates'
import FishDetails from "./components/products/fishes/fishdetails/FishDetails";

import { fetchRecents } from "./redux/ActionCreators";

import { connect } from "react-redux";
import Tickets from "./components/tickets/Tickets";
import ProductDetails from "./components/products/substrates/ProductDetails";


const mapStateToProps = (state) =>{
  return {
    categories : state.categories,
    fishes : state.fishes,
    substrates : state.substrates,
    plants : state.plants,
    foods : state.foods,
    filters : state.filters,
    recentProducts : state.recentProducts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRecents : ()=>{dispatch(fetchRecents())},
})

function MainComponent(props) {

  useEffect(()=>{
    props.fetchRecents();
  },[]);

  const FishWithId = ({match}) =>{
    return(
      <FishDetails 
        fish = {props.fishes.find((fish)=>fish.id===parseInt(match.params.fishId,10))}
      />
    )
    
  }
  const HomePage = () =>{
    return(
      <Home 
        categories = {props.categories}
        recentLoading = {props.recentProducts.isLoading}
        recentErrMess = {props.recentProducts.errmess}
        recentProducts = {props.recentProducts.recents}
      />
    )
  }
  const ProductsData = () =>{
    return(
      <Products 
        fishes = {props.fishes}
        substrates = {props.substrates}
        plants = {props.plants}
        foods = {props.foods}
        filters = {props.filters}
        />
    );
  }
  return ( 
        <AuthProvider>

          <Switch>
          {/*  <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} /> */}
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword}/>
            {/* <Route exact path='/products/fishes' component={FishWithData} />
            <Route exact path='/products/fishes/:fishId' component={FishWithId} /> */}
            <Route exact path='/products' component={ProductsData} />
            {/* <Route exact path='/products/plants' component={Plants} /> */}
            {/* <Route exact path='/products/filters' component={Filters} /> */}
            <Route path='/products/substrates' component={ProductDetails} />
            <Route exact path='/tickets' component={Tickets} /> 
            <Redirect to='/home' /> 
          </Switch> 
        </AuthProvider> 
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
