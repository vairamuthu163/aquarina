import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link } from 'react-router-dom' 
const RenderFilters = ({filter}) =>{
    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <Link to={`/products/plants/${filter.id}`}>
                    <CardImg className="img-q" width="100" height="250" top src={filter.img} alt={filter.caption} />
                    <CardImgOverlay className="text-dark m-3"/*  style={{top:'200px'}} */>
                        <b>{filter.caption}</b>
                        {/* {text && <CardText className="text-center">
                            <b>{fish.caption}</b>
                        </CardText>} */}
                    </CardImgOverlay>
                </Link>
            </Card> 
        </div>
    )
}
function Filters(props) {
    const [selectedFilter,setSelectedFilter] = useState(null);
    const onSelectedFish = (filter) =>{
        setSelectedFilter(filter);
    }
    const renderFilter = (filter) =>{
        if(filter!=null){
            return(
                <Card>
                    <CardImg className="img-q" width="100" height="250" top src={filter.img} alt={filter.caption} />
                    <CardBody>
                        <CardTitle>{filter.caption}</CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (<div></div>)
        }
    }
    const filters = props.filters.map((filter)=>{
        return ( 
            <div className="col-6 col-sm-4 m-0 p-0"  key={filter.id}>
                <RenderFilters filter={filter} />
            </div>
        )
    })
    return (
        <div> 
            <div className="row">
                {filters}
            </div> 
            <div className="row">
                {renderFilter(selectedFilter)}
            </div>
        </div>
    )
}

export default Filters;
