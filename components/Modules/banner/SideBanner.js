import React from 'react';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SpecialDealOne from '../../../public/special-deal/one.png';
import SpecialDealTwo from '../../../public/special-deal/two.png';
import SpecialDealThree from '../../../public/special-deal/three.png';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const SideBanner = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: false,
	};
	return (
		<Slider {...settings}>
			<div className=''>
				<Card className="rounded-0 card-background border-0">
					<Image src={SpecialDealOne} alt="Picture of the author" className="pt-3 justify-centent-center card-image-size" />
					<Card.Body>
						<Card.Title className="text-center font-16 text-capitalize">Wavy Chips</Card.Title>
						{/* <Card.Text className="text-center"> */}
							<h5 className="fw-semibold text-center font-14">Regular Price :</h5>
							<p className="fw-semibold text-center font-13"><del>200/- </del></p>
							<h6 className="fw-semibold text-center font-14">Offer Price :</h6>
							<p className="fw-semibold text-center font-13">150/- </p>
						{/* </Card.Text> */}
						<Button className="text-dark rounded-0 card-btn-style mt-3 text-uppercase fw-semibold">
							<span className="d-flex font-12 justify-content-center">
								<AiOutlineShoppingCart className=' pe-1' size={"20px"}/>
								add to cart
							</span>
						</Button>
					</Card.Body>
				</Card>
			</div>

			<div>
				<Card className="rounded-0 card-background border-0">
					<Image src={SpecialDealTwo} alt="Picture of the author" className="pt-3 justify-centent-center card-image-size" />
					<Card.Body>
						<Card.Title className="text-center font-16 text-capitalize">pillow Chips</Card.Title>
						{/* <Card.Text className="text-center"> */}
							<h5 className="fw-semibold text-center font-14">Regular Price :</h5>
							<p className="fw-semibold text-center font-13"><del>200/- </del></p>
							<h6 className="fw-semibold text-center font-14">Offer Price :</h6>
							<p className="fw-semibold text-center font-13">150/- </p>
						{/* </Card.Text> */}
						<Button className="text-dark rounded-0 card-btn-style mt-3 text-uppercase fw-semibold">
							<span className="d-flex font-12 justify-content-center">
								<AiOutlineShoppingCart className=' pe-1' size={"20px"}/>
								add to cart
							</span>
						</Button>
					</Card.Body>
				</Card>
			</div>

			<div>
				<Card className="rounded-0 card-background border-0">
					<Image src={SpecialDealThree} alt="Picture of the author" className="pt-3 justify-centent-center card-image-size" />
					<Card.Body>
						<Card.Title className="text-center font-16 text-capitalize">Soft & care</Card.Title>
						{/* <Card.Text className="text-center"> */}
							<h5 className="fw-semibold text-center font-14">Regular Price :</h5>
							<p className="fw-semibold text-center font-13"><del>200/- </del></p>
							<h6 className="fw-semibold text-center font-14">Offer Price :</h6>
							<p className="fw-semibold text-center font-13">150/- </p>
						{/* </Card.Text> */}
						<Button className="text-dark rounded-0 card-btn-style mt-3 text-uppercase fw-semibold">
							<span className="d-flex font-12 justify-content-center">
								<AiOutlineShoppingCart className=' pe-1' size={"20px"}/>
								add to cart
							</span>
						</Button>
					</Card.Body>
				</Card>
			</div>



		</Slider>
	);
};

export default SideBanner;
