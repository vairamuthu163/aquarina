import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom' 
const RendeFoods = ({food}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <Link to={`/products/fish-foods/${food.id}`}>
                    <CardImg className="img-q" width="100" height="250" top src={food.img} alt={food.caption} />
                    <CardImgOverlay className="text-dark m-3"/*  style={{top:'200px'}} */>
                        <b>{food.caption}</b>
                        {/* {text && <CardText className="text-center">
                            <b>{fish.caption}</b>
                        </CardText>} */}
                    </CardImgOverlay>
                </Link>
            </Card> 
        </div>
    )
}
function Foods(props) {
    const [selectedFish,setSelectedFish] = useState(null);
    const onSelectedFish = (food) =>{
        setSelectedFish(food);
    }
    const renderFish = (food) =>{
        if(food!=null){
            return(
                <Card>
                    <CardImg className="img-q" width="100" height="250" top src={food.img} alt={food.caption} />
                    <CardBody>
                        <CardTitle>{food.caption}</CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (<div></div>)
        }
    }
    const foods = props.foods.map((food)=>{
        return ( 
            <div className="col-6 col-sm-3 m-0 p-0"  key={food.id}>
                <RendeFoods food={food} />
            </div>
        )
    })
    return (
        <div> 
            <div className="row">
                {foods}
            </div> 
            <div className="row">
                {renderFish(selectedFish)}
            </div>
        </div>
    )
}

export default Foods;
