import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom' 
import { Loading } from '../../../shared/Loading';
import { useHistory } from 'react-router-dom';
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
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(plant)}>
               {/*  <Link to={`/products/plants/${plant._id}`}> */}
                    <CardImg className="img-q" width="100" height="250" top src={plant.img} alt={plant.plantName} />
                    <CardImgOverlay className="text-white m-3">
                        <b>{text && plant.plantName}</b>
                    </CardImgOverlay>
                {/* </Link> */}
            </Card> 
        </div>
    )
}
function Plants(props) {
    const plants = props.plants.map((plant)=>{
        return ( 
            <div className="col-6 col-md-4 m-0 p-0"  key={plant._id}>
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
                </div> 
            </div>
        )
    }

}
export default Plants;
