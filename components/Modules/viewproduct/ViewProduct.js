import React, { useState } from 'react';
import ProductBanner from '../../../public/product.png';
import Image from 'next/image';
import SingDemo from './SingDemo';
import Rating from './StarRating';
import Counter from './Counter';
import ProductDescription from './ProductDescription';
import { BsStarFill } from 'react-icons/bs';

const ViewProduct = () => {
	return (
		<>
			<section className="view-single-pro">
				<div className="product-banner">
					<Image src={ProductBanner} alt="" className="product-banner" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
              <div className=" mt-5">
							  <SingDemo className=" sec-height" />
              </div>
						</div>

						<div className="col-lg-6">
							<div className="border-bottom">
								<h3 className="mt-5 color font-lato display-6 fw-bolder text-capitalize">pillow chips</h3>
								<p className="font-lato font-20 text-dark pt-3">Price: 120/-</p>
								<div className="d-flex justify-content-start align-items-center mb-3 mt-2">
									<div className="d-flex justify-content-start">
										<BsStarFill className="product-review"/>
										<BsStarFill className="product-review"/>
										<BsStarFill className="product-review"/>
										<BsStarFill className="product-review"/>
										<BsStarFill className="product-review"/>
									</div>
									<p className="text-secondary ps-2 fw-bold">( 1 review )</p>
								</div>
							</div>
							<div className="d-flex justify-content-start align-items-center counter mt-3">
								<p className="text-capitalize pe-3 font-lato">quantity :</p>
								<Counter />
							</div>
							<div className="d-flex justify-content-start counter mt-4 mb-4">
								<div className="">
									<button type="button" class="btn btn-success buy-btn rounded-1 text-capitalize px-4 font-lato">
										buy now
									</button>
								</div>
								<div className="ms-2">
									<button type="button" class="btn btn-warning buy-btn2 rounded-1 text-capitalize px-4 font-lato">
										add to cart
									</button>
								</div>
							</div>

						</div>

              <ProductDescription className="mb-5 tabs"/>
					</div>
				</div>
				

				
			</section>
		</>
	);
};

export default ViewProduct;
