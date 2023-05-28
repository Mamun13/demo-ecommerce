import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerOne from '../../../public/banner/bannerone.jpg'
import Bannertwo from '../../../public/banner/bannertwo.jpg'
import Image from 'next/image'

const BannerDemo = () => {
	return (
		<>
		<div className="slider-demo">
			<Carousel fade>
				<Carousel.Item>
        <Image
          src={BannerOne}
          alt="Picture of the author"
					className='banner-img-size'
        />
					{/* <Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item>
        <Image
          src={Bannertwo}
          alt="Picture of the author"
					className='banner-img-size'
        />

					{/* <Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
			</div>
		</>
	);
};

export default BannerDemo;
