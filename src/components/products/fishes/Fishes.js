import React,{ useState } from 'react'
import { Card,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FISHES } from './FishData'
const RenderFish = ({fish}) =>{
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2"/*  onClick={()=>onSelectedFish(fish)} */>
                <Link to={'/products'+fish.url}>
                    <CardImg className="img-q" width="100" height="250" top src={fish.img} alt={fish.caption} />
                    <CardImgOverlay className="text-white m-3">
                        <b>{fish.caption}</b>
                    </CardImgOverlay>
                </Link>
            </Card> 
        </div>
    )
}
function Fishes(props) {
    const [selectedFish,setSelectedFish] = useState(null);
    const onSelectedFish = (fish) =>{
        setSelectedFish(fish);
    }
    const renderFish = (fish) =>{
        if(fish!=null){
            return(
                <Card>
                    <CardImg className="img-q" width="100" height="250" top src={fish.img} alt={fish.caption} />
                    <CardBody>
                        <CardTitle>{fish.caption}</CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (<div></div>)
        }
    }
    const fishes = props.fishes.map((fish)=>{
        return ( 
            <div className="col-6 col-sm-3 m-0 p-0"  key={fish.id}>
                <RenderFish fish={fish} />
            </div>
        )
    })
    return (
        <div> 
            <div className="row">
                {fishes}
            </div> 
            <div className="row">
                {renderFish(selectedFish)}
            </div>
        </div>
    )
}

export default Fishes
