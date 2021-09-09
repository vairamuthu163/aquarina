import React from 'react'
import {useLocation} from 'react-router-dom';
function ProductDetails(props) {
    const location = useLocation();
    return (
        <div>
            <p>{location.state.data.caption}</p>
            <img src={location.state.data.img} alt={location.state.data.img} />
        </div>
    )
}
export default ProductDetails
