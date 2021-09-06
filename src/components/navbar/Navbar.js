import React, { useState } from 'react';
import {Navbar, NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Modal,
    ModalBody,ModalHeader,Form,FormGroup,Label,UncontrolledDropdown,Input,NavbarText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../contexts/AuthContext'; 
import {Link, NavLink,useHistory} from 'react-router-dom';
import "./style.css";

function NavBar(){ 
    const [isNavOpen,setIsNavOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isDropdown,setIsDropdown] = useState(false);
    const[error,setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();
  const[navbar,setNavbar]=useState(false);
    //logout
    const handleLogout = async() =>{
      setError('');
      try{
        await logout();
        history.push('/login');
      }catch{
        setError('Failed to Log out');
      }
    }

    const toggleNav=()=>{
        setIsNavOpen(!isNavOpen);
    }
    const toggleDropdown=()=>{
      setIsNavOpen(!isDropdown);
    }

    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen);
    }
    
    const changBackground = () =>{
      if(window.scrollY>=100){
        setNavbar(true);
      }else{
        setNavbar(false)
      }
    }
    window.addEventListener('scroll',changBackground);
        return(
            <>
                <Navbar dark expand="md" className="fixed-top" id='navBar'>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3><img src="assets/images/logo.png" height="30" width="41" alt="aquarina"/><span className="d-none d-sm-inline hover-underline-animation">Aquarina</span></h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleNav}></NavbarToggler>
                        <Collapse className="justify-content-end" isOpen={isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem className="navItem">
                                  <Tooltip title="Home">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                  </Tooltip>
                                  </NavItem>
                                <NavItem className='navItem'>
                                  <Tooltip title="About Us">
                                    <NavLink className="nav-link" to="/products/fishes">
                                        Products
                                    </NavLink>
                                    </Tooltip>
                                </NavItem>
                                <NavItem className="navItem">
                                 <Tooltip title="Contact Us">
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us    
                                    </NavLink>
                                  </Tooltip>
                                </NavItem>
                                <NavItem className={currentUser ? 'd-none':'navItemSignUp'}>
                                  <Tooltip title="Sign Up">
                                    <NavLink className="nav-link" to="/signup">
                                      <span className="fa fa-sign-in"></span> Sign Up
                                    </NavLink>
                                  </Tooltip>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar className={currentUser ? 'navItem':'d-none'}>
                                  <Tooltip title="Profile"> 
                                    <DropdownToggle nav className="dropDown" caret>
                                      <AccountCircleIcon /> Profile
                                    </DropdownToggle> 
                                  </Tooltip>
                                <DropdownMenu top>
                                  {currentUser && <Link to='/update-profile' style={{textDecoration:'none'}}>
                                    <DropdownItem>
                                      Update Profile
                                    </DropdownItem>
                                  </Link>}
                                  <DropdownItem>
                                    Option 2
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  {currentUser && <DropdownItem onClick={handleLogout}>
                                    log out
                                  </DropdownItem>}
                                </DropdownMenu>
                              </UncontrolledDropdown>
                              <NavbarText>
                                <Button disabled></Button>
                              </NavbarText>
                              {currentUser && <NavItem>
                                  <Tooltip title="Tickets">
                                     <Link className="text-decoration-none"
                                      to='/tickets'
                                     > 
                                       <Button 
                                        variant="outlined"
                                        className="fifth border-none outline-none text-darken"
                                        color="primary"
                                       >Buy Tickets</Button> 
                                      </Link>
                                    </Tooltip>
                                </NavItem>}
                              
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
export default NavBar;