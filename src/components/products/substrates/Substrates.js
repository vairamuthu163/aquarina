import React,{ useState,useEffect } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,Modal,ModalBody} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
import { baseUrl } from '../../../shared/baseUrl';
import { IconButton,Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Rating from '@material-ui/lab/Rating';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAuth } from '../../../contexts/AuthContext';
const RenderSubstrate = ({substrate,deleteProduct}) =>{
    const [text,setText] = useState(false);
    const [value,setValue] = useState(0);
    const handleMouseOver = () =>{
        setText(!text);
    }
    const {currentUser} = useAuth();
    const history = useHistory();
    const handleClick = (substrate) =>{
        console.log(substrate);
        history.push({ 
            pathname: `/products/details/${substrate.substrateName}`,
            state: {data: substrate}
        });
    }
    const [isModalOpen,setIsModalOpen] = useState(false);

    const handleDelete = (id) =>{
        console.log("sdfsdf",id);
        deleteProduct(id,substrate.category)
        toggleModal();
    }
    const handleModal = () =>{
        toggleModal();
    }
    const toggleModal = () =>{
        setIsModalOpen(!isModalOpen)
    }
    return(
        <div className="p-0 m-2">
            <Card
                className="img-quick p-2"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOver}
                
                style={{height:'425px'}}  
            >
                    <CardImg className="img-q" width="100" height="250" top src={baseUrl+substrate.img} alt={substrate.substrateName} />
                    <CardImgOverlay className="text-white m-2 row"> 
                        <div className="col-12">
                            <b>{text && 
                                <IconButton
                                    variant="outlined"
                                    color="inherit"
                                    style={{backgroundColor:'#0088cc'}}
                                    onClick={()=>handleClick(substrate)}
                                >
                                    <i class="fa fa-shopping-bag"></i>
                                </IconButton>
                                }</b>
                            {currentUser && currentUser.email==="vairam@gmail.com" && <b style={{marginLeft:'4px'}}>{text && 
                                <IconButton
                                    variant="outlined"
                                    color="inherit"
                                    style={{backgroundColor:'#e32040'}}
                                    onClick={handleModal}
                                >
                                   <DeleteIcon style={{fontSize:'26px'}}/>
                                </IconButton>
                            }</b>}
                        </div> 
                    </CardImgOverlay>
                    <CardBody className="text-center">
                         <b>{substrate.substrateName}</b> 
                            <br /><br />
                            <Rating
                                name="simple-controlled"
                                value={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                readOnly
                                style={{fontSize:'1.1rem'}}
                            />
                            <br />
                            <i class="fa fa-inr"></i> <b>{substrate.price}.0</b> 
                    </CardBody>
            </Card> 
            <Modal
                isOpen={isModalOpen}
                toggle={toggleModal} 
                centered
                >
                <ModalBody className="row p-4">
                    <div className="col-12 text-center">
                        <h4 style={{color:'#d42059'}}><b>You Can't Undo this operation</b></h4>
                        <img width="220" height="170" src="https://i.pinimg.com/originals/ff/fa/9b/fffa9b880767231e0d965f4fc8651dc2.gif" />
                    </div>
                    <div className="col-12 text-center"> 
                        <h5>Are you sure to Delete?</h5>
                        <Button
                            onClick={()=>handleDelete(substrate._id)}
                            variant="contained"
                            color="secondary"
                        >
                            Yes
                        </Button>
                        <Button 
                            onClick={toggleModal}
                            variant="contained"
                           style={{backgroundColor:'#807c7c',marginLeft:'6px',color:'white'}}
                        >
                            No
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
function Substrates(props) { 
    const [page,setPage] = useState(1);
    const [showPerPage,setShowPerPage] = useState(12);
    const [value,setValue] = useState(0);
    const [paginaton,setPagination] = useState({
        start:0,
        end:showPerPage
    });
    useEffect(()=>{
        const value = showPerPage * page;
        console.log("start : ",value-showPerPage);
        console.log("end : ",value);
        setPagination({
            start:value-showPerPage,
            end : value
        })
    },[page]);
    const substrates = props.substrates.slice(paginaton.start,paginaton.end).map((substrate)=>{
        return ( 
            <div className="col-6 col-md-3 m-0 p-0"  key={substrate._id}>
                <RenderSubstrate substrate={substrate}  deleteProduct = {props.deleteProduct} />
            </div>
        )
    });
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row text-center">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.errmess){
        return(
            <div className="container">
                <div className="row text-center">
                    <h4>{props.errmess}</h4>
                </div>
            </div>
        );
    }
    else{
        return ( 
            <div className="row">
                {substrates}
                <div className="d-flex justify-content-end align-items-end">
                        <Pagination  
                            count={Math.ceil(props.substrates.length/showPerPage)}
                            color={page%2==0 ?"primary":"secondary"}  
                            shape="rounded"
                            size="large"
                            defaultPage={page}
                            onChange={(event,value)=>setPage(value)}
                            // showFirstButton="true"
                        />
                </div>
            </div>
        ) 
    }
    
}

export default Substrates
