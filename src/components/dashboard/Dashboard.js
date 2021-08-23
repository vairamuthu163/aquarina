//default imports
import React,{useState} from 'react' 
import {Card,CardBody,Alert,Jumbotron,Container} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

//custom imports
import { useAuth } from '../../contexts/AuthContext';
import NavBar from '../navbar/Navbar';
import ImageSliders from '../sliders/ImageSliders';
export default function Dashboard() {

    return (
        <>
            <NavBar />
            <Jumbotron>
                <Container>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="display-5">AQUARINA</h1>
                        </div>
                        <div className="col-12 col-sm-6"> 
                            <Container> 
                              <ImageSliders />
                            </Container> 
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </>
    )
}
