import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom' 
const RenderPlant = ({plant}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <Link to={`/products/plants/${plant.id}`}>
                    <CardImg className="img-q" width="100" height="250" top src={plant.img} alt={plant.caption} />
                    <CardImgOverlay className="text-white m-3"/*  style={{top:'200px'}} */>
                        <b>{plant.caption}</b>
                        {/* {text && <CardText className="text-center">
                            <b>{fish.caption}</b>
                        </CardText>} */}
                    </CardImgOverlay>
                </Link>
            </Card> 
        </div>
    )
}
function Plants(props) {
    const [selectedFish,setSelectedFish] = useState(null);
    const onSelectedFish = (plant) =>{
        setSelectedFish(plant);
    }
    const renderFish = (plant) =>{
        if(plant!=null){
            return(
                <Card>
                    <CardImg className="img-q" width="100" height="250" top src={plant.img} alt={plant.caption} />
                    <CardBody>
                        <CardTitle>{plant.caption}</CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (<div></div>)
        }
    }
    const plants = props.plants.map((plant)=>{
        return ( 
            <div className="col-6 col-sm-3 m-0 p-0"  key={plant.id}>
                <RenderPlant plant={plant} />
            </div>
        )
    })
    return (
        <div> 
            <div className="row">
                {plants}
            </div> 
            <div className="row">
                {renderFish(selectedFish)}
            </div>
        </div>
    )
}

export default Plants;
