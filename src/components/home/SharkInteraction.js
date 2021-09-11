import React from 'react'
import { Card, CardImg } from 'reactstrap'

function SharkInteraction() {
    return (
        <div className="container row">
            <Card>
                <CardImg>
                    <video autoplay loop id="vid" muted>
                        <source src="https://www.georgiaaquarium.org/wp-content/uploads/2021/03/manta_ray_underwater_bg_1.1.webm" type="video/webm" />
                    </video>
                </CardImg>
            </Card>
        </div>
    )
}

export default SharkInteraction
