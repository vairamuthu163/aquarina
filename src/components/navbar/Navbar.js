import React, { useState } from 'react';
import {Navbar, NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,Modal,
    ModalBody,ModalHeader,Form,FormGroup,Label,UncontrolledDropdown,Input,NavbarText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../contexts/AuthContext'; 
import {Link, NavLink,useHistory} from 'react-router-dom';
import "./style.css";

function NavBar(props){ 
    const [isNavOpen,setIsNavOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isDropdown,setIsDropdown] = useState(false);
    const[error,setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();
  const[navBackground,setNavBackground]=useState(props.navbg);
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
    
   /*  const changBackground = () =>{
      document.addEventListener("scroll", () => {
        const backgroundcolor = window.scrollY < 200 ? props.navbg :'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))' ;
        setNavBackground(backgroundcolor);
      });
    } */
    const changBackground = () =>{
        const backgroundcolor = window.scrollY < 150 ? props.navbg :'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))' ;
        setNavBackground(backgroundcolor); 
    }
    window.addEventListener('scroll',changBackground);
        return(
            <>
                <Navbar dark expand="md" className="fixed-top" style={{backgroundImage:navBackground}}>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3><img src="logoDolphin.png" height="50" width="80" alt="aquarina"/><span className="d-none d-sm-inline hover-underline-animation">Aquarina</span></h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggleNav}></NavbarToggler>
                        <Collapse className="justify-content-end" isOpen={isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem className="navItem">
                                  <Tooltip title="Home">
                                    <NavLink className="nav-link" to="/home">
                                    &nbsp;&nbsp; <span className="fa fa-home fa-lg"></span> Home &nbsp;&nbsp; 
                                    </NavLink>
                                  </Tooltip>
                                  </NavItem>
                                <NavItem className='navItem'>
                                  <Tooltip title="About Us">
                                    <NavLink className="nav-link" to="/products">
                                    &nbsp;&nbsp; Products &nbsp;&nbsp; 
                                    </NavLink>
                                    </Tooltip>
                                </NavItem>
                                <NavItem className="navItem">
                                 <Tooltip title="Contact Us">
                                    <NavLink className="nav-link" to="/contactus">
                                    &nbsp;&nbsp;  <span className="fa fa-address-card fa-lg"></span> Contact Us &nbsp;&nbsp;     
                                    </NavLink>
                                  </Tooltip>
                                </NavItem>
                                <NavItem className={currentUser ? 'd-none':'fifth'}>
                                  <Tooltip title="Sign Up">
                                    <NavLink className="nav-link" to="/signup">
                                    &nbsp;&nbsp; <span className="fa fa-sign-in"></span>&nbsp;&nbsp; Sign Up&nbsp;&nbsp;&nbsp;&nbsp;
                                    </NavLink>
                                  </Tooltip>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar className={currentUser ? 'navItem mr-2':'d-none'}>
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
                              {/* <NavbarText>
                                <Button disabled></Button>
                              </NavbarText> */}
                              {currentUser && <NavItem>
                                  <Tooltip title="Tickets">
                                     <Link className="text-decoration-none"
                                      to='/tickets'
                                     > 
                                       <Button 
                                        variant="outlined"
                                        className="fifth text-darken ml-2"
                                        style={{color:'white'}}
                                       >&nbsp;&nbsp;Buy Tickets&nbsp;&nbsp;</Button> 
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