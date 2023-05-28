import React from 'react';
import ProductBanner from '../../../public/product.png';
import ProductOne from '../../../public/products/product6.png';
import ProductTwo from '../../../public/products/product1.png';
import ProductThree from '../../../public/products/product3.png';
import ProductFour from '../../../public/products/product4.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GiShoppingCart } from 'react-icons/gi';
// import StickyBox from "react-sticky-box";

const Products = () => {

	return (
		<>
			<section>
				<div className="product-banner">
					<Image src={ProductBanner} alt="" className="product-banner" />
				</div>
				<div className="container">
					
					<div className="row">
						<div className="w-100">
							<h1 className="fw-bolder text-center mt-5 font-40 font-lato ">Our Products</h1>
							<p className="font-lato text-center font-20 mb-5 product-des">
								We Are Restocking as Quickly as Possible. Come Back 7/30 to OrderMore of These Flavors Inspired by the Places You Call
								Home!
							</p>
						</div>
							<div className="col-lg-3 text-center">
								<ul className="stickyContent list-unstyled text-start ps-5 font-20 lh-lg card-border py-3 ">
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> All</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Biscuit</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Bakery</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Chips</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Commodity</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Noddles</span></button>
									</li>
									<li>
										<button className="d-flex category-btn"><IoIosArrowRoundForward className="icon-space me-2"/><span> Snacks</span></button>
									</li>
								</ul>
							</div>
						<div className="col-lg-9">
							<div className="row">
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
												<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductFour} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductFour} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								<div className="col-lg-3 text-center">
										<div className="card-border mb-4">
											<div className="">
												<Link href="/singleproduct/SingleProduct" className="">
													<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
												</Link>
											</div>
											<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
											<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
											<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
											<button className=" font-14 add-cart-btn mb-3 font-lato">
													<div className="d-flex align-items-center text-capitalize">
														<GiShoppingCart/><span className="ps-2">add to cart</span>
													</div>
												</button>
										</div>
								</div>
								
								

								
							</div>
						</div>
					</div>
				</div>
				
			</section>
		</>
	);
};

export default Products;
