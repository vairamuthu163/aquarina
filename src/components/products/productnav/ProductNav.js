import React,{useState} from 'react'
import { Container, Nav,Navbar,NavItem,UncontrolledDropdown,Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from 'reactstrap';
import { Link, NavLink,useHistory } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import "./style.css"

 
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '../../home/Home'
import ImageSliders from '../../sliders/ImageSliders'

export function ProductNav() {
    const [dropDown,setDropdown] = useState(false);
    return (
        <div>
            <Navbar className="d-none d-sm-block" style={{backgroundColor:'#f0f0f0'}}>
                <Container>
                    <Nav>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/home">
                                HOME
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/products/substrates">
                                AQUARIUM SUBSTRATE
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to='/products/plants'>
                                AQUARIUM PLANTS
                            </NavLink>
                        </NavItem>
                        <NavItem className="productNav-item">
                            <NavLink className="nav-link" to="/products/fish-foods">
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
            <Navbar className="d-none d-sm-block" style={{backgroundColor:'#f0f0f0'}}>
                <Container>
                    <Nav className="shipping">
                        <NavItem className="shippingNav-item">
                            <NavLink className="nav-link" to="/home">
                               FREE SHIPPING & RETURN
                            </NavLink>
                        </NavItem>
                        <NavItem className="shippingNav-item">
                            <NavLink className="nav-link" to="/home">
                               MONEY BACK GUARANTEE
                            </NavLink>
                        </NavItem>
                        <NavItem className="shippingNav-item">
                            <NavLink className="nav-link" aria-disabled to="/home">
                               DIRECT FROM FARM
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export function ProductNavbar() {
    const [value, setValue] = React.useState(0);
  
    const history = useHistory();
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if(value==0){
        return(
            <div>
                Tab 1
            </div>
        )
      }
      else if(value==1){
        
         return(
             <div>
                 Tab 2
             </div>
         )
        
      }
      else{
        return(
            <div>
                Tab 3
            </div>
        )
      }
    };
     
    return (
        <div>
        <Paper elevation={3}>
            <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            >
            <Tab label="Profile">

                         <UncontrolledDropdown nav inNavbar>
                                <Tooltip title="Profile"> 
                                  <DropdownToggle nav className="dropDown" caret>
                                   Profile
                                  </DropdownToggle> 
                                </Tooltip>
                              <DropdownMenu top>
                                <Link to='/update-profile' style={{textDecoration:'none'}}>
                                  <DropdownItem>
                                    Update Profile
                                  </DropdownItem>
                                </Link>
                                <DropdownItem>
                                  Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                              <DropdownItem>
                                  log out
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
            </Tab>
            <Tab label="Disabled" />
            <Tab label="Active" />
            </Tabs>
        </Paper>
        <TabPanel value={value}><ImageSliders /></TabPanel>
        <TabPanel value={value} index={1}>Item 2 Details</TabPanel>
        <TabPanel value={value} index={2}>Item 3 Details</TabPanel>
     </div>
    );
  }
function TabPanel(props){
    const {children,value,index} = props;
    return(
        <div>
            {
                value===index && (<h1>{children}</h1>)
            }
        </div>
    )
}