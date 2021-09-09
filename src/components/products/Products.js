import React from 'react'
import { Container, Form , Input,UncontrolledDropdown,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap' 
import "./style.css"
import { Button } from '@material-ui/core'; 
import Fishes from './fishes/Fishes';  
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { ProductNav } from './productnav/ProductNav';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
import Substrates from './substrates/Substrates';
import Plants from './plants/Plants';
import Foods from './fish-foods/Foods';
import Accordian from './accordian/Accordian';
import NavBar from '../navbar/Navbar';
import Filters from './filters/Filters';
export default function Products(props) {
    const [value, setValue] = React.useState(0);
  
    const history = useHistory();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
           <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))'} />
           <div style={{marginTop:'20px'}}>
               <Container>
                    <div className="row" style={{padding:'30px'}}> 
                        <Form className="col-12 col-sm-6 offset-sm-3 p-3 pt-3">
                            <div className="d-flex justify-content-center mt-3">
                                <Input type="search" placeholder="Search here..." className="form-control w-100"/>
                                <Button
                                 type="submit"
                                 variant="contained"
                                 color="primary"
                                 className="m-0 border-none"
                                 >submit</Button>
                            </div>
                        </Form> 
                        {/* <ProductNav className="col-12" />  */}
                        <div className="col-12"> 
                            <Paper elevation={3}>
                                <Tabs
                                    value={value}
                                    indicatorColor="secondary"
                                    textColor="primary"
                                    onChange={handleChange}
                                    aria-label="disabled tabs example"
                                    >
                                    <Tab label={<b>All</b>}></Tab>
                                    <Tab label={<b>Aquarium substrates</b>}/>
                                    <Tab label={<b>Aquarium Plants</b>}/>
                                    <Tab label={<b>Fishes</b>}/>
                                    <Tab label={<b>Fish Food</b>}/>
                                    <Tab label={<b>Aquarium Accessories</b>} />
                                    <Tab label={<b>indoor plants</b>}/>
                                </Tabs>
                            </Paper>
                            <TabPanel value={value} index={0}>All</TabPanel>
                            <TabPanel value={value} index={1}>
                                <Substrates substrates = {props.substrates} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Plants plants={props.plants} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Fishes fishes={props.fishes}/>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <Foods foods = {props.foods} />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <Filters filters = {props.filters}/>
                            </TabPanel>
                            <TabPanel value={value} index={6}>indoor plants</TabPanel>
                        </div>
                        {/* <div className="col-12" style={{paddingTop:'20px'}}>
                            <Fishes fishes={props.fishes}/>
                        </div> */}
                       
                    </div> 
               </Container>
           </div>
        </>
    )
}
function TabPanel(props){
    const {children,value,index} = props;
    return(
        <div>
            {
                value===index && (
                    <div className="row">
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
                        <div className="col-3"> 
                           
                                <Accordian />
                                <Accordian />
                                <Accordian />
                           
                        </div>
                        <div className="col-9">
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    )
}