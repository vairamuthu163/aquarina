import React,{ useState } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { Link,useHistory } from 'react-router-dom' 
const RenderSubstrate = ({substrate}) =>{

    const history = useHistory();

    const [text,setText] = useState(false);
    const handleMouseOver = () =>{
        setText(!text);
    }

    const handleClick = (substrate) =>{
        console.log(substrate);
        history.push({ 
            pathname: `/products/substrates/${substrate.caption}`,
            state: {data: substrate}
        });
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(substrate)}>
               {/*  <Link to={`/products/substrates/${substrate.id}`}> */}
                    <CardImg className="img-q" width="100" height="250" top src={substrate.img} alt={substrate.caption} />
                    <CardImgOverlay className="text-dark m-3"/*  style={{top:'200px'}} */>
                        <b>{substrate.caption}</b>
                        {/* {text && <CardText className="text-center">
                            <b>{fish.caption}</b>
                        </CardText>} */}
                    </CardImgOverlay>
                {/* </Link> */}
            </Card> 
        </div>
    )
}
function Substrates(props) {
    const [selectedFish,setSelectedFish] = useState(null);
    const onSelectedFish = (fish) =>{
        setSelectedFish(fish);
    }
    const renderFish = (substrate) =>{
        if(substrate!=null){
            return(
                <Card>
                    <CardImg className="img-q" width="100" height="250" top src={substrate.img} alt={substrate.caption} />
                    <CardBody>
                        <CardTitle>{substrate.caption}</CardTitle>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (<div></div>)
        }
    }
    const substrates = props.substrates.map((substrate)=>{
        return ( 
            <div className="col-6 col-sm-3 m-0 p-0"  key={substrate.id}>
                <RenderSubstrate substrate={substrate} />
            </div>
        )
    })
    return (
        <div> 
            <div className="row">
                {substrates}
            </div> 
            <div className="row">
                {renderFish(selectedFish)}
            </div>
        </div>
    )
}

export default Substrates;
