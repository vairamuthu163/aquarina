import React,{useState} from 'react'
import { Container, Nav,Navbar,NavItem,UncontrolledDropdown,Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from 'reactstrap';
import { Link, NavLink,useHistory } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import "./style.css"
export function ProductNav() {
    const [dropDown,setDropdown] = useState(false);
    return (
        <div>
            <Navbar className="container-fluid d-none d-sm-block" style={{backgroundColor:'#f0f0f0'}}>
                <Container>
                    <Nav>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                AQUARIUM SUBSTRATE
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                AQUARIUM PLANTS
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                FISH FOOD
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar> 
                            <DropdownToggle nav className="dropDown" caret>
                                 FISHES
                            </DropdownToggle>  
                            <DropdownMenu top> 
                                <DropdownItem>
                                   GUPPIES
                                </DropdownItem> 
                                <DropdownItem>
                                    TETRA FISH
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    PLATY
                                </DropdownItem>
                                <DropdownItem>
                                    SWORDTAILS
                                </DropdownItem>    

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar> 
                            <DropdownToggle nav className="dropDown" caret>
                                AQUARIUM ACCESSORIES
                            </DropdownToggle>  
                            <DropdownMenu top> 
                                <DropdownItem>
                                    AQUARIUM PUMPS&nbsp; &amp;&nbsp; FILTERS
                                </DropdownItem> 
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                               INDOOR PLANTS
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export function ShippingNav(){
    return( 
        <div>
            <Navbar className="container-fluid d-none d-sm-block" style={{backgroundColor:'#f0f0f0'}}>
                <Container>
                    <Nav>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                AQUARIUM SUBSTRATE
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                AQUARIUM PLANTS
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                FISH FOOD
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div> 
    )
}
