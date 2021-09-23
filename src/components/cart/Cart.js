import React from 'react'
import { Form, Input ,Card, CardImg, CardTitle, CardBody} from 'reactstrap' 
import { Button, IconButton } from '@material-ui/core'; 
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavBar from '../navbar/Navbar';
import ClearIcon from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
function Cart() {
    return (
        <>
        <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))'} 
          img={'logoDolphin.png'}
        />
        <div className="container">
            <div className="row"> 
                <div className="col-8 col-sm-6 pt-5 mt-5" style={{margin:'auto'}}>
                    <Form>
                        <div className="d-flex justify-content-center mt-4">
                            <Input type="search" placeholder="Search here..." className="form-control w-100"/>
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="m-0 border-none d-none d-sm-block"
                            >Search&nbsp;&nbsp;</Button>
                        </div>
                    </Form>   
                </div> 
            </div>
            <div className="row mt-4">
                <h2 style={{fontWeight:'bold',color:'#0088CC'}}>Shopping Cart</h2>
            </div>
            <div className="row mt-5">
                <h5 style={{fontWeight:'bold'}} className="text-muted">Free Delivery above INR 499 for Aquarium Plants & Accessories</h5>
            </div>
            <div className="row mt-3">
                <div className="col-3 text-muted"> 
                    Product
                </div>
                <div className="col-2 text-muted">
                    Name
                </div>
                <div className="col-1 text-muted">
                    Price
                </div>
                <div className="col-1 text-muted">
                    Qty
                </div>
                <div className="col-1 text-muted">
                   SubTotal
                </div> 
                <hr className="col-8 mt-3"/>
            </div>
            <div className="row">
                <div className="col-8 mt-3"> 
                    <div className="row">
                        <div className="d-flex justify-content-end">
                            <IconButton color="primary">
                                <ClearIcon color="primary"/>
                            </IconButton>
                            <IconButton color="primary">
                                <i class="fa fa-edit"></i>
                            </IconButton>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    //checked={state.checkedB}
                                    //onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                    checked={true}
                                />
                                } 
                            />
                        </div>
                        <Card className="col-4">
                            <CardImg width="100%" style={{height:'250px'}} src="https://d3sroz1c0sf1tc.cloudfront.net/catalog/product/cache/ed378c934da2de2d6a86d9f8c5fd812b/l/a/lava_sand.webp" />
                        </Card> 
                        <div className="col-3 mt-5 pt-5"  style={{marginRight:'25px'}}>
                            <p className="">Lava sand, 1kg</p>
                        </div>
                        <div className="col-2 mt-5 pt-5" style={{marginRight:'-26px'}}>
                            <p> <span className="fa fa-inr"> </span>800.0</p>
                        </div>
                        <div className="col-1 mt-5 pt-5" style={{marginRight:'10px'}}>
                            <p className="text-center">4</p>
                        </div>
                        <div className="col-2 mt-5 pt-5 text-center"  style={{marginRight:'-33px'}}>
                            <p className="text-center"> <span className="fa fa-inr"> </span>800.0</p>
                        </div> 
                    </div>
                </div>
                <div className="col-4">
                    <Card> 
                            <CardBody>
                                <CardTitle>
                                    <h3 style={{fontWeight:'bold',color:'#0088CC'}}>Summary</h3>
                                </CardTitle> 
                                <Accordion
                                    square={false}
                                    elevation={0}
                                >
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography>Estimate Shipping and Tax</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <hr />
                                <div className="row">
                                    <div className="col-9">
                                        <p>Subtotal</p>
                                    </div>
                                    <div className="col-3">
                                        <p><i class="fa fa-inr" aria-hidden="true"></i>880.0</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-9 text-muted">
                                        <p>Shipping (Shipping Table Rates - Shipping across India (Blue Dart & other leading couriers))</p>
                                    </div>
                                    <div className="col-3">
                                        <h6><i class="fa fa-inr" aria-hidden="true"></i>99.00</h6>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-9">
                                      <h5 className="text-muted">Order Total</h5>
                                    </div>
                                    <div className="col-3">
                                    ₹537.10
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                    >
                                        Order Now
                                    </Button>
                                </div>
                            </CardBody>
                    </Card>  
                </div>

            </div>
        </div>
        </>
    )
}

export default Cart
