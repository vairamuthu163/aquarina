import React, { useEffect,useState,useRef } from 'react'
import { Container,Input,UncontrolledDropdown,DropdownItem,DropdownMenu,DropdownToggle, Modal, ModalHeader, ModalBody,Card,CardImg, Label} from 'reactstrap' 
import "./style.css"
import { Button, IconButton } from '@material-ui/core'; 
import {Button as Btn} from 'react-bootstrap'
import Fishes from './fishes/Fishes';  
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze'; 
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { Fab } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router';
import Substrates from './substrates/Substrates';
import Plants from './plants/Plants';
import Foods from './fish-foods/Foods';
import Accordian from './accordian/Accordian';
import NavBar from '../navbar/Navbar';
import Filters from './filters/Filters';
import AllProducts from './allproducts/AllProducts';
import {Form} from 'react-bootstrap'
import axios from 'axios'
import { baseUrl } from '../../shared/baseUrl';
import Pagination from '@material-ui/lab/Pagination';
export default function Products(props) {
    const [value, setValue] = React.useState(0);
    const [imageUpload,setImageUpload]=useState(null);
    const categoryRef = useRef(null);
    const priceRef = useRef();
    const nameRef = useRef();

    const [imagePreview,setImagePreview] = useState('');
     const [category,setCategory] = useState('');
     const [state,setState] = useState({
        search:null,
        allData:[],
        filteredData:[]
    });
     useEffect(()=>{
        //console.log('product',props.allProducts); 
        state.allData.push(...props.fishes,...props.foods,...props.substrates,...props.plants);
        state.filteredData.push(...props.fishes,...props.foods,...props.substrates,...props.plants);
     },[]); 
     useEffect(()=>{

     },[imageUpload])
    const history = useHistory();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
     const [isModalOpen,setIsModalOpen] = useState(false); 
    
    const toggleModal=()=>{
         setIsModalOpen(!isModalOpen);
         setImagePreview('');
        setImageUpload('');
        setCategory('');
    } 
   
     
    const searchChange = (event) => {
        console.log(event.target.value);
        setState({
            ...state,
             [event.target.name] : event.target.value,
            
            filteredData:state.allData.filter(item =>{
             return Object.keys(item).some(key=>
               item[key].toString().toLowerCase().includes(event.target.value.toString().toLowerCase()))
          }),
        });
         console.log("search ",state.search);
      };


      const handleImageUpload = async(event) =>{
          event.preventDefault();
          //console.log(imageUpload.name,nameRef.current.value,priceRef.current.value,category);
          await save(imageUpload,nameRef.current.value,priceRef.current.value,category);
          toggleModal();

      }

      const handleCategoryChange=(e)=>{
         setCategory(e.target.value);
      }

      const handleUploadClick = (event) =>{
            const file = event.target.files[0];
            setImageUpload(file);
            setImagePreview(URL.createObjectURL(file));
      }

      const save = (image,name,price,category) =>{
        // var fd = new FormData();
        // fd.append("name",name);
        // fd.append("price",price);
        // fd.append("image",image);
        // fd.append("category",category);
        if(category==="Fishes"){ 
             props.postFishes(image,name,price,category);
        }
        if(category==="Plants"){
            console.log(category);
            props.postPlants(image,name,price,category);
        }
        if(category==="Fish-Foods"){
            console.log("Fish-Foods Post Command");
            props.postFoods(image,name,price,category);
        }
        if(category==="Substrates"){
            console.log("Substrates Post Command"); 
            props.postSubstrates(image,name,price,category);
        }
        if(category==="Accessories"){
            console.log("Filters Post command");
            props.postFilters(image,name,price,category);
        }
        // fetch("http://localhost:3001/fishes",{
        //     method:'POST',
        //     body:fd
        // })
        // .then((res)=>res.json())
        // .then((data)=>{
        //     console.log(data);
        // })
      }
    return (
        <>
           <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))'} />
           <div style={{marginTop:'20px'}}>
               <Container>
                    <div className="row" style={{padding:'30px'}}> 
                        <div className="col-8 col-sm-6 offset-sm-3 p-3 pt-5">
                            <Form>
                                <div className="d-flex justify-content-center mt-4">
                                    <Input type="search" placeholder="Search here..." 
                                        className="form-control w-100 rounded-left"
                                        name="search"
                                        value={state.search}
                                        onChange = {searchChange}
                                    />
                                    <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="m-0 border-none d-none d-sm-block"

                                    >Search&nbsp;&nbsp;</Button>
                                </div>
                            </Form>
                             
                        </div>
                        <div className="col-3 col-sm-3 p-3 pt-5 mt-4">
                            <Btn
                                style={{float:'right'}}
                                variant="outline-success"
                                onClick={toggleModal}
                            >
                                <span className="fa fa-cart-plus fa-lg" style={{marginRight:'9px'}}></span><span className="d-none d-sm-inline-block">ADD</span>
                            </Btn>  
                        </div>
                        
                        {/* <ProductNav className="col-12" />  */}
                        <div className="col-12"> 
                            <Paper elevation={3}>
                                <Tabs
                                    value={value}
                                    indicatorColor="secondary"
                                    textColor="primary"
                                    onChange={handleChange}
                                    aria-label="disabled tabs example"
                                    //centered
                                    variant="scrollable"
                                    scrollButtons="on"
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
                           {/*  <TabPanel value={value} index={0}>
                                <AllProducts 
                                    allProducts={state.filteredData}
                                />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Substrates 
                                    substrates = {props.substrates} 
                                    isLoading = {props.substratesLoading}
                                    errmess = {props.substrateErr}
                                />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Plants
                                    plants={props.plants} 
                                    isLoading = {props.plantsLoading}
                                    errmess = {props.plantsErr} 
                                    />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Fishes 
                                    fishes={props.fishes}
                                    isLoading={props.fishesLoading}
                                    errmess = {props.fishesErr}
 
                                />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <Foods 
                                    foods = {props.foods} 
                                    isLoading = {props.foodsLoading}
                                    errmess = {props.foodsErr}
                                />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <Filters 
                                    filters = {props.filters}
                                    isLoading = {props.filtersLoading}  
                                    errmess = {props.filtersErr}  
                                />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <img src={baseUrl+"1632366745057aquarium-2.jpg"} />
                            </TabPanel> */}
                     <div className="row">
                        <div className="col-12 m-2 d-flex justify-content-between">
                                <div className="p-1 mt-2">
                                    <div className="d-flex">
                                        <div className="m-3 mt-2">Sort By </div>
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
                                        Show 
                                        <IconButton>
                                            <AppsIcon />
                                        </IconButton> 
                                        <IconButton>
                                            <DehazeIcon />
                                        </IconButton>
                                    </div>
                                </div>
                        </div>
                        <div className="col-12"> 
                            {value===0 && 
                               <AllProducts 
                                    allProducts={state.filteredData}
                                />
                            }
                            {
                            value===1 && 
                                <Substrates 
                                    substrates = {props.substrates} 
                                    isLoading = {props.substratesLoading}
                                    errmess = {props.substrateErr}
                                />
                            }
                            {
                                value===2 && 
                                <Plants
                                    plants={props.plants} 
                                    isLoading = {props.plantsLoading}
                                    errmess = {props.plantsErr} 
                                />
                            }
                            {
                                value===3 && 
                                <Fishes 
                                    fishes={props.fishes}
                                    isLoading={props.fishesLoading}
                                    errmess = {props.fishesErr}
 
                                />
                            }
                            {
                                value===4 && 
                                <Foods 
                                    foods = {props.foods} 
                                    isLoading = {props.foodsLoading}
                                    errmess = {props.foodsErr}
                                />
                            }
                            {
                                value===5 && 
                                <Filters 
                                    filters = {props.filters}
                                    isLoading = {props.filtersLoading}  
                                    errmess = {props.filtersErr}  
                                />
                            }
                            {
                                value===6 && 
                                <h3>Indoor Plants</h3>
                            }
                         </div>
                       </div>
                        {/* <div className="col-12" style={{paddingTop:'20px'}}>
                            <Fishes fishes={props.fishes}/>
                        </div> */}
                       
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        toggle={toggleModal}
                        className="modal-lg"
                        backdrop="static"
                        >
                         <ModalHeader toggle={toggleModal} >
                                <h4 style={{fontWeight:'bold'}}>ADD PRODUCT</h4>
                          </ModalHeader>
                            <ModalBody>
                                <Form onSubmit={handleImageUpload} className="row" method="POST" enctype='multipart/form-data'>
                                    <div className="col-12 col-md-6"> 
                                        <Form.Group id="image" className="text-center">
                                            {/* <Form.Label for="image">Image<span className="text-danger"> *</span></Form.Label><br /> */}
                                            <input
                                                accept="image/*"
                                                className="d-none"
                                                id="contained-button-file"
                                                //multiple
                                                type="file"
                                                onChange={handleUploadClick}
                                                onError={(event) => event.target.src = ''}
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Fab component="span" color="primary">
                                                    <AddPhotoAlternateIcon />
                                                </Fab>
                                            </label> 
                                            <Card className="mt-3 border-0"> 
                                                <CardImg className="border-0" src={imagePreview && imagePreview} />
                                            </Card>
                                        </Form.Group>   
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <Form.Group id="name">
                                                <Form.Label for="name" className="mt-3">Product Name<span className="text-danger"> *</span></Form.Label>
                                                <Form.Control 
                                                    className="pr-4" 
                                                    type="text" 
                                                    ref={nameRef} 
                                                    placeholder="Name" 
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group id="price">
                                                <Form.Label for="price" className="mt-3">Price<span className="text-danger"> *</span></Form.Label>
                                                <Form.Control 
                                                    className="pr-4" 
                                                    type="text" 
                                                    ref={priceRef} 
                                                    placeholder="Price" 
                                                    required
                                                />
                                            </Form.Group>
                                            <Label className="mt-3">Category<span className="text-danger"> *</span></Label>
                                                <Input 
                                                    type="select" 
                                                    id="time"
                                                    name="time"   
                                                    style={{marginTop:'10px'}} 
                                                    value={category}
                                                    onChange = {handleCategoryChange}
                                                > 
                                                    <option>Select a Category....</option> 
                                                    <option>Fishes</option> 
                                                    <option>Plants</option> 
                                                    <option>Fish-Foods</option> 
                                                    <option>Substrates</option> 
                                                    <option>Accessories</option> 
                                                </Input>  
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                            className="mt-3"
                                        >
                                            Submit
                                        </Button>
                                        </div> 
                                </Form> 
                            </ModalBody>
                    </Modal>
               </Container>
               
           </div>
        </>
    )
}
function TabPanel(props){
    const {children,value,index} = props;
    return(
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        >
            {
                value===index && (
                    <div className="row">
                        <div className="col-12 m-2 d-flex justify-content-between">
                            <div className="p-1 mt-2">
                                <div className="d-flex">
                                    <div className="m-3 mt-2">Sort By </div>
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
                                Show 
                                <IconButton>
                                    <AppsIcon />
                                </IconButton> 
                                <IconButton>
                                    <DehazeIcon />
                                </IconButton>
                            </div>
                        </div>
                        {/* <div className="col-3"> 
                                <Accordian />
                                <Accordian />
                                <Accordian />
                           
                        </div> */}
                        <div className="col-12"> 
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    )
}