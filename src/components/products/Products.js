import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form , Input} from 'reactstrap'
import NavBar from '../navbar/Navbar'
import "./style.css"
import {ProductNav} from './productnav/ProductNav';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; 
import { Button, Divider } from '@material-ui/core';
import ImageSliders from '../sliders/ImageSliders';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
export default function Products() {
    const classes = useStyles();
    return (
        <>
           <NavBar />
           <div style={{marginTop:'18px'}}>
               <Container>
                    <div className="row" style={{padding:'30px'}}> 
                        <Form className="col-12 col-sm-6 offset-sm-3 p-3 pt-3">
                            <div className="d-flex justify-content-center">
                                <Input type="search" placeholder="Search here..." className="form-control w-100"/>
                                <Button
                                 type="submit"
                                 variant="contained"
                                 color="primary"
                                 >submit</Button>
                            </div>
                        </Form> 
                   
                        <ProductNav />
                    
                        <div className="col col-sm-3" style={{paddingTop:'30px'}}>
                            <Card>
                                <CardHeader className="p-3 bg-primary text-white">
                                    Top Catogories
                                </CardHeader>
                                <CardBody>
                                    <List className="m-0 p-0">
                                        <ListItem button divider>
                                            <ListItemText primary="Aquarium Substrate" />
                                        </ListItem>
                                        <ListItem button divider>
                                            <ListItemText primary="Aquarium Plants" />
                                        </ListItem>
                                        <ListItem button divider>
                                            <ListItemText primary="Fish Food" />
                                        </ListItem> 
                                        <ListItem button>
                                            <ListItemText primary="Aquarium Accessories" />
                                        </ListItem>
                                    </List>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col col-sm-9">
                            <ImageSliders />
                        </div>
                     </div>
               </Container>
           </div>
        </>
    )
}
