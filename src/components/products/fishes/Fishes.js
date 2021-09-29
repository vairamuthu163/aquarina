import React,{ useEffect, useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link,useHistory } from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
import { baseUrl } from '../../../shared/baseUrl';
import {Button, IconButton, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
const RenderFish = ({fish}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    const history = useHistory();
    const handleClick = (fish) =>{ 
        history.push({ 
            pathname: `/products/details/${fish.fishName}`,
            state: {data: fish}
        });
    }
    return(
        <div className="p-0 m-2">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(fish)}>
                    <CardImg className="img-q" width="100" height="250" top src={baseUrl+fish.img} alt={fish.fishName} />
                    <CardImgOverlay className="text-white m-2"> 
                        <b>{text && 
                            <IconButton
                                variant="outlined"
                                color="inherit"
                                style={{backgroundColor:'#0088cc'}}
                            >
                                <i class="fa fa-shopping-bag"></i>
                            </IconButton>
                            }</b>
                    </CardImgOverlay>
                    <CardImgOverlay className="text-white text-center" style={{marginTop:'190px'}}>
                        <b>{text && fish.fishName}</b>
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function Fishes(props) { 
    const [page,setPage] = useState(1);
    const [showPerPage,setShowPerPage] = useState(12);
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
    
    const fishes = props.fishes.slice(paginaton.start,paginaton.end).map((fish)=>{
        return ( 
            <div className="col-6 col-md-3 m-0 p-0"  key={fish._id}>
                <RenderFish fish={fish} />
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
                    {fishes} 
                    <div className="d-flex justify-content-end align-items-end">
                        <Pagination  
                            count={Math.ceil(props.fishes.length/showPerPage)}
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

export default Fishes
