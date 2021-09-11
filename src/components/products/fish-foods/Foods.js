import React,{ useState,useEffect } from 'react'
import { Card,CardBody,CardImg,CardImgOverlay} from 'reactstrap'
import { Link } from 'react-router-dom';
import { Loading } from '../../../shared/Loading'; 
const RendeFoods = ({food}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                    <CardImg className="img-q" width="100" height="250" src={food.img} alt={food.foodName} />
                    <CardImgOverlay className="text-dark m-3">
                        <b>{food.foodName}</b> 
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function Foods(props) { 
    useEffect(()=>{
        console.log("Foods Component "+props.foods);
    })
    const foods = props.foods.map((food)=>{
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
                </div>  
            </div>
        )
    }
    
}

export default Foods;
