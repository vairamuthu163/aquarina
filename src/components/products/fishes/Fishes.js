import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link,useHistory } from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
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
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(fish)}>
                    <CardImg className="img-q" width="100" height="250" top src={fish.img} alt={fish.fishName} />
                    <CardImgOverlay className="text-white m-3">
                        <b>{text && fish.fishName}</b>
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function Fishes(props) { 
    const fishes = props.fishes.map((fish)=>{
        return ( 
            <div className="col-6 col-md-4 m-0 p-0"  key={fish._id}>
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
            </div>
        ) 
    }
}

export default Fishes
