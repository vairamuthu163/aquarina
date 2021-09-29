import React,{useEffect,useState} from "react";
import SignUp from "./components/signup/SignUp";
import Home from './components/home/Home'
import Login from './components/login/Login'; 
import { useAuth } from "./contexts/AuthContext";
import {withRouter, Route, Switch,Redirect} from 'react-router-dom';
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import UpdateProfile from "./components/updateprofile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Products from "./components/products/Products";
// import Plants from "./components/products/plants/Plants";
// import Filters from "./components/products/filters/Filters";
// import Fishes from "./components/products/fishes/Fishes";
// import Substrates from './components/products/substrates/Substrates'
import FishDetails from "./components/products/details/FishDetails";

import { deleteCart, fetchFilters, fetchFishes, fetchFoods, fetchPlants, fetchRecents, fetchSubstrates, getTickets, getUser, postCart, postFilters, postFishes, postFoods, postPlants, postSubstrates, postTickets, postUser, postUserTickets } from "./redux/ActionCreators";
 
import { connect } from "react-redux";
import Tickets from "./components/tickets/Tickets"; 
import Footer from "./components/footer/Footer"; 
import ProductDetails from "./components/products/ProductDetails";
import ContactUs from "./components/contactus/ContactUs";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import Cart from "./components/cart/Cart";
import MultiStepForm from "./components/tickets/stepper/MultiStepForm";

const mapStateToProps = (state) =>{
  return {
    categories : state.categories,
    fishes : state.fishes,
    substrates : state.substrates,
    plants : state.plants,
    foods : state.foods,
    filters : state.filters,
    recentProducts : state.recentProducts,
    user : state.user,
    tickets:state.tickets, 
  }
}

const mapDispatchToProps = (dispatch) => ({
  postFishes : (image,name,price,category)=>{dispatch(postFishes(image,name,price,category))},
  postFilters : (image,name,price,category)=>{dispatch(postFilters(image,name,price,category))},
  postSubstrates : (image,name,price,category)=>{dispatch(postSubstrates(image,name,price,category))},
  postPlants : (image,name,price,category)=>{dispatch(postPlants(image,name,price,category))},
  postFoods : (image,name,price,category)=>{dispatch(postFoods(image,name,price,category))},
  postTickets : (date,available,user_id) => {dispatch(postTickets(date,available,user_id))},
  postUserTickets : (email,date,members)=> {dispatch(postUserTickets(email,date,members))},
  postCart : (email,product_id,product_name,count,category,img,price)=> {dispatch(postCart(email,product_id,product_name,count,category,img,price))},
  getUser : ()=>{dispatch(getUser())},
  deleteCart : (email,name)=>{dispatch(deleteCart(email,name))},
  postUser : (email)=>{dispatch(postUser(email))},
  fetchRecents : ()=>{dispatch(fetchRecents())},
  fetchFishes : ()=>{dispatch(fetchFishes())},
  fetchPlants : ()=>{dispatch(fetchPlants())},
  fetchFoods : ()=>{dispatch(fetchFoods())},
  fetchSubstrates : ()=>{dispatch(fetchSubstrates())},
  fetchFilters : ()=>{dispatch(fetchFilters())},
  getTickets : ()=>{dispatch(getTickets())}
})

function MainComponent(props) {
  const {currentUser} = useAuth();  
  const [allProduct,setAllProduct] = useState([]);
  var allproducts = []
  useEffect(()=>{
    props.fetchRecents();
    props.fetchFishes();
    props.fetchPlants();
    props.fetchFoods();
    props.fetchSubstrates();
    props.fetchFilters();
    props.getTickets();
    props.getUser();
    //allproducts.push(...props.fishes.fishes,...props.substrates.substrates,...props.foods.foods,...props.filters.filters,...props.plants.plants)
    //console.log("dfs",props.user.user);
    //console.log("Allproducts ",allproducts);
  },[]);   
  useEffect(async() => {
   await allproducts.push(...props.fishes.fishes,...props.substrates.substrates,...props.foods.foods,...props.filters.filters,...props.plants.plants)
   console.log("Allproducts ",allproducts);
  }, []);
  // let cartDetails=[];
  // let userCart = [];
  var findUser;
  useEffect(async() => {
    let userEmail = currentUser && ""+currentUser.email;
    //findUser = props.user.user.filter((user) => user.email === userEmail) 
    // userCart.push(findUser);  
    // //console.log("user cart userdeta",userCart); 
    // findUser.map((use)=>{
    //   use.cart.map((ca)=>{
    //     cartDetails.push(ca);
    //   })
    // }) 
    console.log("cart ",props.user.user.filter((user) => user.email === userEmail));
  }, [])
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

        substrates = {props.substrates.substrates}
      />
    )
  }
  const TicketsDetails = () =>{
    return(
      <Tickets  
        postTickets = {props.postTickets}
        tickets = {props.tickets.tickets}
        postUserTickets = {props.postUserTickets}
      />
    )
  }
  const ProductWithDetails = () =>{
    return(
      <ProductDetails 
        postCart = {props.postCart}
      />
    )
  }
  const CartWithDetails = () =>{
    let userEmail = currentUser && ""+currentUser.email;
    return (
      <Cart  
        //findUser = {props.user.user.filter((user) => user.email === userEmail)}
        deleteCart = {props.deleteCart}
        userDetails = {props.user.user} 
        cartDetails = {props.user.user.filter((user) => user.email === userEmail)}
      />
    )
  }
  const ProductsData = () =>{
    return(
      <Products  
        allProducts = {allProduct}

        fishes = {props.fishes.fishes}
        fishesLoading = {props.fishes.isLoading}
        fishesErr = {props.fishes.errmess}

        substrates = {props.substrates.substrates}
        substratesLoading = {props.substrates.isLoading}
        substrateErr = {props.substrates.errmess}

        plants = {props.plants.plants}
        plantsLoading = {props.plants.isLoading}
        plantsErr = {props.plants.errmess}

        foods = {props.foods.foods}
        foodsLoading = {props.foods.isLoading}
        foodsErr = {props.foods.errmess}

        filters = {props.filters.filters}
        filtersLoading = {props.filters.isLoading}
        filtersErr = {props.filters.errmess}

        postFishes = {props.postFishes}
        postFilters = {props.postFilters}
        postSubstrates = {props.postSubstrates}
        postPlants = {props.postPlants}
        postFoods = {props.postFoods}

        />
    );
  }
  return ( 
        <>
          <ScrollToTop>
            <Switch>
            {/*  <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} /> */}
              <Route exact path='/home' component={HomePage}/>
              <Route path='/contactus' component={ContactUs} />
              <Route exact path='/update-profile' component={UpdateProfile} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={()=> <Login postUser={props.postUser}/>} />
              <Route path='/forgot-password' component={ForgotPassword}/>
              {/* <Route exact path='/products/fishes' component={FishWithData} />
              <Route exact path='/products/fishes/:fishId' component={FishWithId} /> */}
              <Route exact path='/products' component={ProductsData} />
              {/* <Route exact path='/products/plants' component={Plants} /> */}
              {/* <Route exact path='/products/filters' component={Filters} /> */}
              {/* <Route path='/products/substrates' component={SubstrateDetails} />
              <Route path='/products/fishes' component={FishDetails} />
              <Route path='/products/plants' component={PlantDetails} />
              <Route path='/products/filters' component={FilterDetails} />
              <Route path='/products/fish-foods' component={FoodDetails} /> */}
              <Route path='/products/details' component={ProductWithDetails} />
              <Route exact path='/tickets' component={TicketsDetails} />
              <Route exact path='/cart' component={CartWithDetails} />
              <Route exact path='/allProducts' component={MultiStepForm} />
              <Redirect to='/home' /> 
            </Switch> 
          </ScrollToTop>
          <Footer />
       </>
  );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
