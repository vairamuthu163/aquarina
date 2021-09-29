import React, { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";
import NavBar from "../navbar/Navbar";   
import { emphasize, withStyles } from '@material-ui/core/styles';
import { useAuth } from "../../contexts/AuthContext";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'; 
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {Tabs,Tab} from 'react-bootstrap'
import { baseUrl } from "../../shared/baseUrl";
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    height: theme.spacing(3),
    padding:theme.spacing(2),
    fontSize:theme.spacing(1.6),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);
function ProductDetails(props) {
  const {currentUser} = useAuth();
  const [key,setKey] = useState('details');
  const [count,setCount] = useState(1);
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const [name, setName] = useState();
  useEffect(() => {
    var value = Object.values(location.state.data);
    setName(value[2]);
  }, []);
  const history = useHistory();
  function handleClick(e,val) { 
    e.preventDefault();
    if(val==0){
      history.push('/home');
    }
    else{
      history.push('/products');
    }
  }
  const handleCart = async() =>{
     await props.postCart(
       currentUser.email,
       location.state.data._id,
       name,
       count,
       location.state.data.category,
       location.state.data.img,
       location.state.data.price
    );
  }
  return (
    <>
      <NavBar
        navbg={"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))"} 
      />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-12">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="/home"
                label="Home"
                color="primary"
                icon={<HomeIcon fontSize="small" />}
                onClick={()=>handleClick(0)}
              />
              <StyledBreadcrumb
                component="a"
                href="/products"
                label="Products"
                color="primary"
               /*  icon={<FormatListBulletedIcon fontSize="small" />} */
                onClick={()=>handleClick(1)} 
              />
              <StyledBreadcrumb
                label={name}  
                deleteIcon={<ExpandMoreIcon />} 
                disabled
                style={{color:'black'}}
              />
            </Breadcrumbs>
          </div>
          <div className="col-12 col-md-5 mt-4">
            <p>{name}</p>
            {/*  <img src={location.state.data.img} alt={name} /> */}
            <Card className="p-2">
              <CardImg
                width="100%"
                style={{ maxHeight: "500px" }}
                src={baseUrl+location.state.data.img}
                alt={name}
              />
            </Card>
          </div>
          <div className="col-12 col-md-4 mt-md-5 mb-md-5">
            <h2 className="mt-4" style={{fontWeight:'bold'}}>{name}</h2>
            <Box component="fieldset" mb={3} borderColor="transparent" className="d-flex"> 
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
               />
               <p style={{marginLeft:'20px'}}> | </p>
               <Typography style={{marginLeft:'30px'}}> Be the first to review this product</Typography>
            </Box>
            <div className="mt-3 ruppee">
                <span className="fa fa-inr"></span>{location.state.data.price+".00"}
            </div>
            <hr />
            <div className="mt-md-4 mb-md-4 d-flex flex-row">
              <ButtonGroup disableElevation variant="outlined" color="primary">
                <Button 
                  style={{padding:'10px 10px'}}
                  onClick={()=>{setCount(count-1)}}
                  disabled={count===0}
                  >
                    <RemoveIcon />
                </Button>
                <Button 
                  variant="contained" 
                  style={{padding:'10px 20px',cursor:'auto',backgroundColor:'#0088CC',color:'white'}} 
                  disableElevation
                  >
                   {count}
                </Button>
                <Button 
                  style={{padding:'10px 10px'}} 
                  onClick={()=>{setCount(count+1)}}
                  >
                    <AddIcon />
                </Button>
              </ButtonGroup> 
                <Button 
                    style={{padding:'10px 10px',backgroundColor:'#0088CC',color:'white',marginLeft:'10px'}}
                    onClick={handleCart}
                  >
                    <ShoppingCartIcon /> ADD TO CART
                </Button> 
                <Button 
                    variant="outlined"
                    style={{padding:'10px 10px',marginLeft:'10px'}}
                  >
                    {/* <span className="fa fa-heart-o" style={{fontSize:'20px'}}></span> */}
                    <FavoriteBorderIcon fontSize="medium"/>
                </Button> 
            </div>
            <hr />
            <div className="mt-4 d-flex flex-row">
                <h6 className="text-muted">{name} is available to buy in increments of 1</h6>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-5 d-none d-sm-block">
              <div className="mt-md-3 mt-2 d-flex flex-row">
                  <Card style={{width:'60px',borderRadius:'50px'}}>
                    <CardBody className="p-2">
                      <LocalShippingIcon style={{fontSize:'40px'}}/> 
                    </CardBody>
                  </Card>
                  <h6 className="text-muted mt-3" style={{marginLeft:'10px'}}>FREE SHIPPING</h6>
              </div>
              <hr style={{marginLeft:'10px'}} />
              <div className="mt-md-3 mt-2 d-flex flex-row">
                  <Card style={{width:'63px',borderRadius:'50px',height:'59px'}}>
                    <CardBody className="p-2">
                      <AttachMoneyIcon style={{fontSize:'40px'}}/> 
                    </CardBody>
                  </Card>
                  <h6 className="text-muted mt-3" style={{marginLeft:'15px'}}>100% MONEY BACK GUARANTEE</h6>{'\n'}
              </div> 
              <hr style={{marginLeft:'10px'}} />
              <div className="mt-md-3 mt-2 d-flex flex-row">
                  <Card style={{width:'60px',borderRadius:'50px'}}>
                    <CardBody className="p-2">
                      <span className="fa fa-life-bouy" style={{fontSize:'40px'}}></span> 
                    </CardBody>
                  </Card>
                  <h6 className="text-muted mt-3" style={{marginLeft:'10px'}}>ONLINE SUPPORT 24/7</h6>{'\n'}
              </div>  
              <div className="mt-md-3 mt-2 d-flex flex-row align-items-center justify-content-center">
                  <Card>
                    <CardImg style={{width:'300px',height:'290px'}} src="https://d3sroz1c0sf1tc.cloudfront.net/wysiwyg/smartwave/porto/product/Aquarium.jpg" />
                  </Card>
              </div> 
          </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-9">
              <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 tabsPane"
                  variant="pills"
                >
                  <Tab eventKey="details" title="Details">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Tab> 
                </Tabs>
            </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
