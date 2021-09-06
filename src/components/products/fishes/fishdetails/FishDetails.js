import React from 'react' 
import {Link} from 'react-router-dom';
import {Card,CardImg,CardImgOverlay, CardBody, Container} from 'reactstrap';

const RenderFish = ({fish}) =>{
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2"/*  onClick={()=>onSelectedFish(fish)} */> 
                <CardImg className="img-q" width="100" height="250" top src={fish.img} alt={fish.caption} />
                <CardImgOverlay className="text-white m-3">
                    <b>{fish.caption}</b>
                </CardImgOverlay> 
            </Card> 
        </div>
    )
}
function FishDetails(props) {
    console.log("FishDetails component "+props.fish);
    if(props.fish!=null){
        return (
            <div className="container" style={{marginTop:'18px'}}>
                <Container>
                    <RenderFish fish={props.fish} />
                </Container>
            </div>
        )
    }
}

export default FishDetails;
