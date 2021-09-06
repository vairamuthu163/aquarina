import React,{useEffect,useState} from 'react';
import {Modal,
    ModalBody,ModalHeader,ModalFooter,Form,FormGroup,Label,Input,NavbarText, Container} from "reactstrap";
import {Button} from '@material-ui/core';
 import './tickets.css';
function Tickets(props) { 
  
    const [isModalOpen,setIsModalOpen] = useState(true); 
    
    const toggleModal=()=>{
         setIsModalOpen(!isModalOpen);
    }
    return (
        <div style={{marginTop:'17px'}}>
            <div className="container-fluid">
                <Container>
                    <div className="row row-contents text-white">
                        <div className="col-12 col-md-8" style={{marginTop:'70px'}}>
                            <h1 className="display-3 hover-underline-animation">Get Tickets</h1>
                        </div>
                        <div className="col-12 col-md-4">

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
