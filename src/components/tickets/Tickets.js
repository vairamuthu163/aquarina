import React,{useEffect,useState} from 'react';
import {Modal,
    ModalBody,ModalHeader,Label,Input,Card,CardBody,CardHeader,FormFeedback, Container, CardFooter} from "reactstrap";
 import './tickets.css';
 import NavBar from '../navbar/Navbar';  
import { Formik } from 'formik';
import {Button} from '@material-ui/core';  
import * as yup from 'yup'; 

const validationSchema =yup.object({
    date : yup.string().required("Please Select the Data!"), 
    time : yup.string().required("Please Select the Time!"),
    members : yup.string().required("Please enter the no of members!")
});


function Tickets(props) {  
    const [isModalOpen,setIsModalOpen] = useState(true); 
    
    const toggleModal=()=>{
         setIsModalOpen(!isModalOpen);
    } 
    const handleSubmit = async(values,{resetForm}) => {
        await alert(JSON.stringify(values,null,2)); 
        resetForm();   
    }
    return (
        <div>
            <NavBar navbg={'linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))'} />
            <div className="container-fluid">
                <Container style={{color:'#f7f7f7'}}>
                    <div className="row row-contents">
                        <div className="col-12 col-md-6" style={{marginTop:'90px'}}>
                            <div className="text-center mb-3">
                                <h1 className="display-5 hover-underline-animation">Get Tickets</h1> 
                            </div>
                            <Formik
                                initialValues={{
                                    date : '',
                                    time : '',
                                    members : ''
                                }}
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                            >{(formik =>
                            <form onSubmit={formik.handleSubmit}>
                                    <Card className="myorder bg-gradient bg-transparent">
                                        <CardBody>
                                            <Label htmlFor="date" style={{marginTop:'5px'}}>What day would you like to visit? <span className="text-danger">*</span></Label>
                                            <Input 
                                                type="date"
                                                placeholder="Please select a date"
                                                fullWidth
                                                id="date"
                                                name="date" 
                                                value={formik.values.date}
                                                onChange={formik.handleChange}
                                                invalid={formik.touched.date && Boolean(formik.errors.date)}
                                                helperText={formik.touched.date && formik.errors.date}
                                                style={{marginTop:'10px'}}  
                                            />
                                            <FormFeedback>{formik.errors.date}</FormFeedback>
                                            <Label for="time" style={{marginTop:'5px'}}>What time would you like to visit?<span className="text-danger">*</span></Label>
                                            <Input 
                                                type="select" 
                                                id="time"
                                                name="time" 
                                                value={formik.values.time}
                                                onChange={formik.handleChange}
                                                invalid={formik.touched.time && Boolean(formik.errors.time)}
                                                helperText={formik.touched.time && formik.errors.time} 
                                                style={{marginTop:'10px'}}
                                                placeholder="Please Select a Time"
                                            >
                                                <option>10:00 AM</option> 
                                                <option>11:00 AM</option> 
                                                <option>12:00 PM</option> 
                                                <option>1:00 PM</option> 
                                                <option>2:00 PM</option> 
                                                <option>3:00 PM</option> 
                                                <option>4:00 PM</option>
                                                <option>5:00 PM</option>
                                                <option>6:00 PM</option>
                                            </Input>
                                            <FormFeedback>{formik.errors.time}</FormFeedback>
                                            <Label htmlFor="members" style={{marginTop:'5px'}}>How many will be visiting? <span className="text-danger">*</span></Label>
                                            <Input 
                                                type="number"
                                                fullWidth
                                                placeholder="Number of Guests"
                                                id="members"
                                                name="members" 
                                                value={formik.values.members}
                                                onChange={formik.handleChange}
                                                invalid={formik.touched.members && Boolean(formik.errors.members)}
                                                helperText={formik.touched.members && formik.errors.members}
                                                style={{marginTop:'10px'}}  
                                            /> 
                                            <FormFeedback>{formik.errors.members}</FormFeedback>
                                            <Button 
                                                fullWidth
                                                type="submit" 
                                                color="primary"
                                                variant="contained"
                                                style={{marginTop:'30px'}}    
                                            >
                                                Submit
                                            </Button>
                                            </CardBody>
                                    </Card>
                                </form>
                            )}
                            </Formik>
                        </div>
                        <div className="col-12 offset-md-2 col-md-4" style={{marginTop:'10.8rem'}}>
                             <Card className="myorder bg-gradient bg-transparent">
                                <CardHeader className="text-center"><h2 className="hover-underline-animation">My Order</h2></CardHeader>
                                <CardBody>
                                    General admission<br />{JSON.stringify(props.data)}
                                    @6.00 PM<br /><br />
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <b>1 X $36.95</b>
                                        <b>$36.95</b>
                                    </div>
                                </CardBody>
                                <CardFooter style={{margin:'20px 0px'}}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <b>SUB TOTAL</b>
                                        <b>$36.95</b>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        className="mt-3"
                                    >
                                        Check Out
                                    </Button>
                                </CardFooter>
                             </Card>
                        </div>
                    </div>
                </Container>
            </div>
            
            <Modal 
                scrollable={true} 
                isOpen={isModalOpen}
                toggle={toggleModal}
                modalTransition={{ timeout: 1000 }} backdropTransition={{ timeout: 1000 }}
                className="modal-lg"
                contentClassName="custom-modal-style"    
            >
                <ModalHeader toggle={toggleModal}><b>Aquarina Aquarium is open to the public</b></ModalHeader>
                <ModalBody>
                    <div className="listTag">
                        <li><b>Aquarina Aquarium is requiring our guests to wear a mask covering their nose and mouth during their visit.</b></li>
                        <li><b>Help us, help you.</b> We have placed social distancing reminders and plexiglass barriers throughout the building, but we need you to be mindful of the spaces to help keep everyone safe.</li>
                        <li>Tickets are only available online and need to be purchased in advance of your visit. Entry to Aquarina Aquarium will be scheduled in 30-minute timeslots. To alleviate stress due to traffic, parking, and other unforeseen issues, you will have a 1-hour grace period to enter the building from your ticketed arrival time. <b>Please arrive on time, to assist us with proper social distancing during entry.</b></li>
                        <li>All tickets are now a single price regardless of age or arrival time. <b> Children age 2 and under are still free and do not require admission tickets.</b></li>
                        <li>Access to our Dolphin Presentation, Sea Lion Presentation and our 4D Theater shows are included with your admission to the aquarium.</li>
                    </div>
                    <div className="mt-3">
                        <Button color="primary" onClick={toggleModal}
                            variant="contained"
                        >I Understood</Button>
                    </div>
                </ModalBody> 
            </Modal>
        </div>
    )
}

export default Tickets
