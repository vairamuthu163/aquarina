//default imports
import React,{useState} from 'react' 
import {Card,CardBody,Alert,Jumbotron,Container, CardHeader} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ReactCardFlip from 'react-card-flip';
import { Button } from '@material-ui/core';
//custom imports
import "./style.css";
import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../navbar/Navbar';
import ImageSliders from '../sliders/ImageSliders';
export default function Dashboard() {
    const [isFlipped,setIsFlipped] = useState(false);

    const handleFlip = (e) =>{
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <>
            <NavBar />
            <Jumbotron>
                <Container>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="display-4"> 
                                <span className="title">
                                    AQUARINA
                                </span> 
                            </h1>
                            <p style={{fontSize:'1.5rem'}}>Aquarium, receptacle for maintaining aquatic organisms, either freshwater or marine, or a facility in which a collection of aquatic organisms is displayed or studied.</p>
                        </div>
                        <div className="col-12 col-sm-6"> 
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
            
        </>
    )
}
