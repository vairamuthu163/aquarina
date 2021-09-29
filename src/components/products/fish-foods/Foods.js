import React,{ useState,useEffect } from 'react'
import { Card,CardBody,CardImg,CardImgOverlay} from 'reactstrap'
import { useHistory } from 'react-router-dom';
import { Loading } from '../../../shared/Loading'; 
import { baseUrl } from '../../../shared/baseUrl';
import { IconButton } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
const RendeFoods = ({food}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    const history = useHistory();
    const handleClick = (food) =>{ 
        history.push({ 
            pathname: `/products/details/${food.foodName}`,
            state: {data: food}
        });
    }
    
    return(
        <div className="p-0 m-2">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(food)}>
                    <CardImg className="img-q" width="100" height="250" src={baseUrl+food.img} alt={food.foodName} />
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
                    <CardImgOverlay className="text-dark text-center" style={{marginTop:'190px'}}>
                        <b>{text && food.foodName}</b> 
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function Foods(props) { 
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
    const foods = props.foods.slice(paginaton.start,paginaton.end).map((food)=>{
        return ( 
            <div className="col-6 col-sm-3 m-0 p-0" key={food._id}>
                <RendeFoods food = {food} />
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
            <div> 
                <div className="row">
                    {foods}
                    <div className="d-flex justify-content-end align-items-end">
                        <Pagination  
                            count={Math.ceil(props.foods.length/showPerPage)}
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

export default Foods;
