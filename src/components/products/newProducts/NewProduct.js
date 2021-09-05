import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './newproduct.css'
import {Card, CardBody, CardHeader } from "reactstrap";
 function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
export default function NewProduct() {
  var settings = { 
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase : 'linear',
    initialSlide: 0,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  
  };
  return (
    <Slider {...settings} style={{backgroundColor:'lightBlue'}}>
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 1</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 2</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 3</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 4</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
      
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 5</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
      <div className="p-3">
        <Card>
          <CardHeader>Sample card 6</CardHeader>
          <CardBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </CardBody>
        </Card>
      </div>
    </Slider>
  );
}