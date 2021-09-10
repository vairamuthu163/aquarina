//default imports
import React,{useState,useEffect} from 'react' 
import {Card,CardImg,CardBody,CardImgOverlay,Alert,Jumbotron,Container, CardHeader} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ReactCardFlip from 'react-card-flip';
import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
//custom imports
import "./style.css";
import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../navbar/Navbar';
import ImageSliders from '../sliders/ImageSliders';
import {ShippingNav } from '../products/productnav/ProductNav';
import List from '@material-ui/core/List';
import {ListItem,ListItemText} from '@material-ui/core';   
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NewProduct from '../products/newProducts/NewProduct';  
import Experience from './Experience';


const RenderRecentProducts = ({recent}) =>{
    return(
        <Card className="col-12">
            <CardImg className="img-q col-3" height="80" width="80" top src={recent.img} alt={recent.caption} />
            <CardBody className="col-6">
                <p>{recent.caption}</p>
            </CardBody>
        </Card>
    )
}

const RenderCategories = ({fish}) =>{
    if(fish!=null){
        return(
            <Card className="img-quick p-2" key={fish.id}>
                <Link to={'/products'+fish.url}>
                    <CardImg className="img-q" width="100" height="250" top src={fish.img} alt="Card image cap" />
                    <CardImgOverlay className="text-white m-3">
                        <b>{fish.caption}</b>
                    </CardImgOverlay>
                </Link>
            </Card>
        )
    }
}

export default function Home(props) {
    const [isFlipped,setIsFlipped] = useState(false);



    /* useEffect(()=>{
        axios.get('http://localhost:3001/categories')
        .then((response)=>{
           console.log(response); 
        })
        .catch((err)=>{
          console.log(err);
        }) 
    },[]); */



    const handleFlip = (e) =>{
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }
    const fishes = props.categories.map((fish)=>{
        return ( 
            <div key={fish.id} className="col-12 col-sm-3 m-0 p-0">
                <RenderCategories fish = {fish} />
            </div>
        )
    });

    const recentProducts = props.recentProducts.map((recent)=>{
        return(
            <div key={recent._id}>
                <RenderRecentProducts recent = {recent} />
            </div>
        )
    })

    const history = useHistory();
    const handleClicked = (itemSelected) =>{
        if(itemSelected==0){
            history.push('/products/fishes');
            
        }
        else if(itemSelected==1){
            history.push('/')
        }
    }
    return (
        <div>
            <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0))'} />
            <Jumbotron>
                <Container>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="display-4"> 
                                <span className="title">
                                    AQUARINA
                                </span> 
                            </h1>
                            <br />
                            <h3 className="display-6">Explore the Mysteries of the Deep</h3>
                            <p style={{fontSize:'1.2rem'}}>Our expansive new gallery, Sharks! Predators of the Deep, takes you from fear to fascination as you explore the epic views and experience unique encounters with our fierce new residents.</p>
                        </div>
                        <div className="col-12 col-sm-6 mb-2 mt-5"> 
                            <Container> 
                               <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                    <Card style={{color:'white'}} className="card-flip" onMouseEnter={handleFlip} flipSpeedBackToFront="0.9">
                                        <CardHeader>This is the Front of the card.</CardHeader>
                                        <CardBody style={{color:'white'}}>
                                            Click the Button 
                                        </CardBody>
                                    </Card>
                                    <Card  style={{color:'black'}} onMouseLeave={handleFlip} flipSpeedBackToFront="0.9">
                                        <CardHeader>This is the back of the card.</CardHeader>
                                        <CardBody>
                                             <div>
                                                 <Button color="primary"
                                                    variant="contained"
                                                    className="buttonCard"
                                                 >Click</Button>
                                             </div>
                                        </CardBody>
                                    </Card>
                               </ReactCardFlip>
                            </Container> 
                        </div> 
                    </div>
                </Container>
            </Jumbotron> 
            <Container className="position-relative h-75" style={{marginTop:'-120px'}}>
                <div className="row">  
                    <div className="col mr-sm-3 ml-sm-3 text-dark" style={{backgroundColor:'#3f51b5'}}>
                        <Card style={{minHeight:'400px'}}>
                           <CardBody className="p-3 text-center">
                               <Experience />
                           </CardBody>
                        </Card>
                    </div>    
                </div>
            </Container>
            <Container className="position-relative">
                <div className="row mt-4">
                    <div className="col col-sm-3" style={{paddingTop:'30px',position:'relative'}}>
                        <Card style={{borderRadius:'0px'}}>
                            <CardHeader className="p-3 bg-primary text-white text-center">
                                <b>Top Categories </b>
                            </CardHeader>
                            <CardBody>
                                <List className="m-0 p-0">
                                    <ListItem button divider onClick={()=>handleClicked(0)}>
                                        <ListItemText primary="Aquarium Substrate" />
                                    </ListItem>
                                    <ListItem button divider onClick={()=>handleClicked(1)}>
                                        <ListItemText primary="Aquarium Plants" />
                                    </ListItem>
                                    <ListItem button divider onClick={()=>handleClicked(2)}>
                                        <ListItemText primary="Fish Food" />
                                    </ListItem> 
                                    <ListItem button onClick={()=>handleClicked(3)}>
                                        <ListItemText primary="Aquarium Accessories" />
                                    </ListItem>
                                </List>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col col-sm-9">
                        <ImageSliders />
                    </div>
                    <div className="col mt-4">
                        <ShippingNav />
                    </div> 
                    <div className="row row-contents m-0 p-2 mt-3">
                        {fishes}
                    </div>
                    <div className="mt-5">
                        <h3 className="text-center">AQUARIUM PLANTS, ACCESSORIES & FISHES</h3>
                        <div className="mt-5 mb-4">
                            <h4>New Products</h4>
                            <hr/>
                            <NewProduct />
                        </div>
                    </div>
                    <div className="row row-contents mt-3">
                        <div className="col col-sm-4">
                            <h5>Recently Added Products</h5> 
                            <hr /> 
                            <div className="col-12">
                                {recentProducts}
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <h5>Best Selling Products</h5>
                            <hr />
                        </div>
                        <div className="col col-sm-4">
                            <h5>Featured Products</h5>
                            <hr />
                        </div>
                    </div>
                </div>
                <div>
                  <a style={{position:'fixed',bottom:'8px',right:'19px',margin:'0',padding:'5px 3px'}} href="#"> 
                        <Fab aria-label="like" color="primary" className="go_back">
                            <ExpandLessIcon />
                        </Fab> 
                  </a>
                </div>
            </Container>
        </div>
    )
}