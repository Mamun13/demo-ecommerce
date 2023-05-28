import Slider from 'react-slick';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
// import Logo from '../../../public/logo/LOGO.png';
import Logo2 from '../../../public/logo/snack.png';
import Logo3 from '../../../public/logo/homecare.png';
import Logo4 from '../../../public/logo/eggy.png';
import { BsWallet2 } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri';
import { BsTruck } from 'react-icons/bs';
import { IoIosPricetags } from 'react-icons/io';

const Brands = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
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
			<section className="brands-part pb-4">
				<div className="container">
					<div className="row">
						<h1 className="text-uppercase pt-5 fw-bold text-center font-inter fs-1 pb-3">brands</h1>
						<Slider {...settings}>
							<div className="d-flex justify-content-center">
								<Image src={Logo2} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo3} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo4} alt="Picture of the author" className="pt-3 brands-size" />
							</div>

							<div className="d-flex justify-content-center">
								<Image src={Logo4} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo3} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
						</Slider>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="support py-4">
				<Container>
					<div className="d-flex">
						<div className="support-div mx-2">
							<div className="p-3 shadow rounded">
								<MdOutlineVerifiedUser className="support-icons font-40"/>
								<p className="text-capitalize text-center font-16 fw-semibold py-3">100% percent secured</p>
							</div>
						</div>
						<div className="support-div mx-2">
							<div className="p-3 shadow rounded">
								<BsWallet2 className="support-icons font-40"/>
								<p className="text-capitalize text-center font-16 fw-semibold py-3">support lots of payments</p>
							</div>
						</div>
						<div className="support-div mx-2 ">
							<div className="p-3 shadow rounded">
								<RiServiceLine className="support-icons font-40"/>
								<p className="text-capitalize text-center font-16 fw-semibold py-3">24 hours / 7days support</p>
							</div>
						</div>
						<div className="support-div mx-2 ">
							<div className="p-3 shadow rounded">
								<BsTruck className="support-icons font-40"/>
								<p className="text-capitalize text-center font-16 fw-semibold py-3">free delivary with $50</p>
							</div>
						</div>
						<div className="support-div mx-2">
							<div className="p-3 shadow rounded">
								<IoIosPricetags className="support-icons font-40"/>
								<p className="text-capitalize text-center font-16 fw-semibold py-3">best price guaranteed</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Brands;
