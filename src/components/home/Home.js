//default imports
import React,{useState,useEffect} from 'react' 
import {Card,CardImg,CardBody,CardImgOverlay,Alert,Jumbotron,Container, CardHeader} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ReactCardFlip from 'react-card-flip';
import { Button } from '@material-ui/core';
//custom imports
import "./style.css";
import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../navbar/Navbar';
import ImageSliders from '../sliders/ImageSliders';
import {ShippingNav } from '../products/productnav/ProductNav';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';  
import NewProduct from '../products/newProducts/NewProduct'; 

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
        <>
            <NavBar />
            <Jumbotron>
                <Container>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="display-3"> 
                                <span className="title">
                                    AQUARINA
                                </span> 
                            </h1>
                            <br />
                            <h3 className="display-6">Explore the Mysteries of the Deep</h3>
                            <p style={{fontSize:'1.2rem'}}>Our expansive new gallery, Sharks! Predators of the Deep, takes you from fear to fascination as you explore the epic views and experience unique encounters with our fierce new residents.</p>
                        </div>
                        <div className="col-12 col-sm-6 mb-2"> 
                            <Container> 
                               <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                    <Card style={{color:'white'}} className="card-flip" onClick={handleFlip} flipSpeedBackToFront="0.9">
                                        <CardHeader>This is the Front of the card.</CardHeader>
                                        <CardBody style={{color:'white'}}>
                                            Click the Button 
                                        </CardBody>
                                    </Card>
                                    <Card  style={{color:'black'}} onClick={handleFlip} flipSpeedBackToFront="0.9">
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
            <Container className="position-relative" style={{marginTop:'-60px'}}>
                <div className="row">  
                    <div className="col mr-sm-3 ml-sm-3 text-dark">
                        <Card>
                           <CardBody className="p-5">
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the
                               1500s, when an unknown printer took a galley of type and scrambled it to
                               make a type specimen book. It has survived not only five centuries, but
                               also the leap into electronic typesetting, remaining essentially
                               unchanged. It was popularised in the 1960s with the release of Letraset
                               sheets containing Lorem Ipsum passages, and more recently with desktop
                               publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           </CardBody>
                        </Card>
                    </div>    
                </div>
            </Container>
            <Container className="position-relative">
                <div className="row mt-4">
                    <div className="col col-sm-3" style={{paddingTop:'30px',position:'relative'}}>
                        <Card>
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
            </Container>
        </>
    )
}