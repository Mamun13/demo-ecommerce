import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';


const ComboPack = ({title, image, image2,image3, producttitle, producttitle2, producttitle3, offerbanner}) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 2000,
    autoplay: true,
    autoplaySpeed: 2500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<section className="combo-pack">
				<div className="container border-top m- p-0">
					<div className="header-title mt-4 mb-3 position-relative rounded">
						<h1 className="text-center font-24 text-capitalize font-inter py-3 ">{title}</h1>
						<Link href="#">
							<div className="d-flex justify-content-center combo-btn bg-white px-3 py-2 position-absolute rounded-pill">
								<p className=" font-16 fw-semibold">View all</p>
								<BsArrowRight className="arrow ms-2" />
							</div>
						</Link>
					</div>
				</div>

        

				<div className="container pb-4">
					<div className="row">
						<div className="col-lg-9 p-0">
								<Slider {...settings}>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0 card-height">
													<div className="product-bg">
														<Image src={image} className='card-img-top mt-3 mb-3'/>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle}</Card.Title>
														<Card.Text className="text-center">
															Price:- 150/-
														</Card.Text>
														<Button className="text-dark text-center rounded-0 combo-add-cart mt-3 mb-3 text-uppercase fw-semibold">
															<div className="d-flex justify-content-between text-center font-14 pe-0">
																<AiOutlineShoppingCart className="pt-1 pe-1" size={'20px'} />
																<span>add to cart</span>
															</div>
														</Button>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0 card-height">
													<div className="product-bg">
														<Image src={image2} className='card-img-top mt-3 mb-3'/>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle2}</Card.Title>
														<Card.Text className="text-center">
															Price:- 150/-
														</Card.Text>
														<Button className="text-dark text-center rounded-0 combo-add-cart mt-3 mb-3 text-uppercase fw-semibold">
															<div className="d-flex justify-content-between text-center font-14 pe-0">
																<AiOutlineShoppingCart className="pt-1 pe-1" size={'20px'} />
																<span>add to cart</span>
															</div>
														</Button>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0 card-height">
													<div className="product-bg">
														<Image src={image3} className='card-img-top mt-3 mb-3'/>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle3}</Card.Title>
														<Card.Text className="text-center">
															Price:- 150/-
														</Card.Text>
														<Button className="text-dark text-center rounded-0 combo-add-cart mt-3 mb-3 text-uppercase fw-semibold">
															<div className="d-flex justify-content-between text-center font-14 pe-0">
																<AiOutlineShoppingCart className="pt-1 pe-1" size={'20px'} />
																<span>add to cart</span>
															</div>
														</Button>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0 card-height">
													<div className="product-bg">
														<Image src={image2} className='card-img-top mt-3 mb-3'/>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle}</Card.Title>
														<Card.Text className="text-center">
															Price:- 150/-
														</Card.Text>
														<Button className="text-dark text-center rounded-0 combo-add-cart mt-3 mb-3 text-uppercase fw-semibold">
															<div className="d-flex justify-content-between text-center font-14 pe-0">
																<AiOutlineShoppingCart className="pt-1 pe-1" size={'20px'} />
																<span>add to cart</span>
															</div>
														</Button>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0 card-height">
													<div className="product-bg">
														<Image src={image3} className='card-img-top mt-3 mb-3'/>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle3}</Card.Title>
														<Card.Text className="text-center">
															Price:- 150/-
														</Card.Text>
														<Button className="text-dark text-center rounded-0 combo-add-cart mt-3 mb-3 text-uppercase fw-semibold">
															<div className="d-flex justify-content-between text-center font-14 pe-0">
																<AiOutlineShoppingCart className="pt-1 pe-1" size={'20px'} />
																<span>add to cart</span>
															</div>
														</Button>
													</Card.Body>
												</Card>
											</div>
										</div>

									
								</Slider>
						</div>
						<div className="col-lg-3">
							<div className="offer-bg mt-0 ps-2">
								<Image src={offerbanner} alt="" className="offer-img" />
							</div>
						</div>


					</div>
				</div>
			</section>

		
        

				
		</>
	);
};

export default ComboPack;
