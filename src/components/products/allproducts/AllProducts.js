import React,{ useState,useEffect } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { useHistory} from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
const RenderAllProducts = ({product}) =>{
    const [text,setText] = useState(false);
    const [name,setName] = useState();
   
    const history = useHistory();
    useEffect(()=>{
        var value = Object.values(product);
        //console.log("alue", product)
        setName(value[2]);
    },[]);
    const handleClick = (filter) =>{ 
        history.push({ 
            pathname: `/products/details/${name}`,
            state: {data: product}
        });
    }
    const handleMouseOver = () =>{
        setText(!text);
    }
    return(
        <div className="p-0 m-0">
            <Card className="img-quick p-2" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={()=>handleClick(product)}>
                    <CardImg className="img-q" width="100" height="250" top src={product.img} alt={product.name} />
                    <CardImgOverlay className="m-3">
                        <b>{text && name}</b> 
                    </CardImgOverlay>
            </Card> 
        </div>
    )
}
function AllProducts(props) {
    const allProducts = props.allProducts.sort(() => Math.random() - 0.5).slice(0,9).map((product)=>{
        return (
            <div className="col-6 col-sm-4 m-0 p-0"  key={product._id}>
                <RenderAllProducts product={product} />
            </div>
        )
    })
  
        return ( 
            <div className="row">
                {allProducts}
            </div>
        )  
}

export default AllProducts
