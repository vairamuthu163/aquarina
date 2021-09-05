import React from 'react'
import { Container, Form , Input,UncontrolledDropdown,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap' 
import "./style.css"
import {ProductNav} from './productnav/ProductNav'; 
import { Button } from '@material-ui/core'; 
import Fishes from './fishes/Fishes';  
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
export default function Products(props) {
      
    return (
        <>
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
                                 className="m-0 border-none"
                                 >submit</Button>
                            </div>
                        </Form> 
                        <ProductNav className="col-12" /> 
                        <div className="col-12 m-2 d-flex justify-content-between">
                            <div className="p-1 mt-2">
                                <div className="d-flex">
                                    <div className="m-3 mt-1">Sort By </div>
                                    <UncontrolledDropdown>
                                        <DropdownToggle caret>
                                            Position
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Sort By</DropdownItem> 
                                            <DropdownItem>Product Name</DropdownItem> 
                                            <DropdownItem>Price</DropdownItem> 
                                            <DropdownItem>Most viewed</DropdownItem> 
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div> 
                            </div>
                            <div className="p-1 mt-2">
                                Show <AppsIcon></AppsIcon> <DehazeIcon></DehazeIcon>
                            </div>
                        </div>
                        <div className="col-12" style={{paddingTop:'20px'}}>
                            <Fishes fishes={props.fishes}/>
                        </div>
                    </div> 
               </Container>
           </div>
        </>
    )
}
