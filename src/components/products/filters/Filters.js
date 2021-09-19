import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
const RenderFilters = ({filter}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <Link to={`/products/plants/${filter._id}`}>
                    <CardImg className="img-q" width="100" height="250" top src={filter.img} alt={filter.filterName} />
                    <CardImgOverlay className="text-dark m-3">
                        <b>{filter.filterName}</b> 
                    </CardImgOverlay>
                </Link>
            </Card> 
        </div>
    )
}
function Filters(props) {
    const filters = props.filters.map((filter)=>{
        return ( 
            <div className="col-6 col-sm-4 m-0 p-0"  key={filter._id}>
                <RenderFilters filter={filter} />
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
            <div className="row">
                {filters}
            </div>
        ) 
    } 
}

export default Filters;
