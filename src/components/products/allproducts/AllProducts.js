import React,{ useState,useEffect } from 'react'
import { Card,CardText,CardBody,CardHeader,CardImg,CardImgOverlay,CardTitle,Container } from 'reactstrap'
import { useHistory} from 'react-router-dom';
import { Loading } from '../../../shared/Loading';
import { IconButton } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating'; 
import Pagination from '@material-ui/lab/Pagination';
import { baseUrl } from '../../../shared/baseUrl';
const RenderAllProducts = ({product}) =>{
    const [text,setText] = useState(false);
    const [name,setName] = useState();
    const [value, setValue] = React.useState(4);
    const history = useHistory();
    useEffect(()=>{
        var value = Object.values(product);
       //console.log("alue", value[2])
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
        <div className="p-0 m-2">
            <Card className="img-quick p-2" 
                onMouseEnter={handleMouseOver} 
                onMouseLeave={handleMouseOver} 
                onClick={()=>handleClick(product)}
                style={{height:'425px'}}  
            > 
                    <CardImg 
                        className="img-q" 
                        width="100" 
                        height="250" top 
                        src={baseUrl+product.img} 
                        alt={product.name} 
                        
                    /> 
                    <CardImgOverlay className="text-white m-2"> 
                        <b>{text && 
                            <IconButton
                                variant="outlined"
                                color="inherit"
                                style={{backgroundColor:'#0088cc'}}
                            >
                                <i class="fa fa-shopping-bag"></i>
                            </IconButton>
                            }</b>
                    </CardImgOverlay> 
                    <CardBody className="text-center">
                         <b>{name}</b> 
                            <br /><br />
                            <Rating
                                name="simple-controlled"
                                value={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
                                /* onChange={(event, newValue) => {
                                    setValue(newValue);
                                }} */
                                readOnly 
                                style={{fontSize:'1.1rem'}}
                            />
                            <br />
                            <i class="fa fa-inr"></i> <b>{product.price}.0</b> 
                    </CardBody>
            </Card> 
        </div>
    )
}
function AllProducts(props) {
    const [page,setPage] = useState(1);
    const [showPerPage,setShowPerPage] = useState(12);
    const [paginaton,setPagination] = useState({
        start:0,
        end:showPerPage
    });
    useEffect(()=>{
        const value = showPerPage * page;
        console.log("start : ",value-showPerPage);
        console.log("end : ",value);
        setPagination({
            start:value-showPerPage,
            end : value
        })
    },[page]);
    //sort(() => Math.random() - 0.5).
    const allProducts = props.allProducts.slice(paginaton.start,paginaton.end).map((product)=>{
        return (
            <div className="col-6 col-sm-3 m-0 p-0"  key={product._id}>
                <RenderAllProducts product={product} />
            </div>
        )
    })
  
        return ( 
            <div className="row">
                {allProducts}
                <div className="d-flex justify-content-end align-items-end">
                    <Pagination 
                        //count={props.allProducts.length-11} 
                        count={Math.ceil(props.allProducts.length/showPerPage)}
                        color={page%2==0 ?"primary":"secondary"} 
                        
                        shape="rounded"
                        size="large"
                        defaultPage={page}
                        onChange={(event,value)=>setPage(value)}
                        // showFirstButton="true"
                    />
                </div>
            </div>
        )  
}

export default AllProducts
