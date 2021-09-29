import React,{ useState,useEffect } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom' 
import { Loading } from '../../../shared/Loading';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../../../shared/baseUrl';
import Pagination from '@material-ui/lab/Pagination';
import { IconButton } from '@material-ui/core';
const RenderPlant = ({plant}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    const history = useHistory();
    const handleClick = (plant) =>{ 
        history.push({ 
            pathname: `/products/details/${plant.plantName}`,
            state: {data: plant}
        });
    }
    return(
        <div className="p-0 m-2">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(plant)}>
                    <CardImg className="img-q" width="100" height="250" top src={baseUrl+plant.img} alt={plant.plantName} />
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
                        <b>{text && plant.plantName}</b>
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function Plants(props) {
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
    const plants = props.plants.slice(paginaton.start,paginaton.end).map((plant)=>{
        return ( 
            <div className="col-6 col-md-3 m-0 p-0"  key={plant._id}>
                <RenderPlant plant={plant} />
            </div>
        )
    })
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
            <div> 
                <div className="row">
                    {plants}
                    <div className="d-flex justify-content-end align-items-end">
                        <Pagination  
                            count={Math.ceil(props.plants.length/showPerPage)}
                            color={page%2==0 ?"primary":"secondary"}  
                            shape="rounded"
                            size="large"
                            defaultPage={page}
                            onChange={(event,value)=>setPage(value)}
                            // showFirstButton="true"
                        />
                    </div>
                </div> 
            </div>
        )
    }

}
export default Plants;
