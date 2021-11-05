import React from 'react'
import NavBar from '../navbar/Navbar'

function OrderHistory() {
    return (
        <div>
            <NavBar
                navbg={"linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))"} 
            />
            <div className="container" style={{ marginTop: "100px" }}> 
                 <div className="row">
                    <div className="text-center">
                        <h1><b>Your Order History</b></h1>
                    </div>
                    <div>
                        
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default OrderHistory
