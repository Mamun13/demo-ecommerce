import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Logo from '../../public/logo/LOGO.png';
import { BiAlignLeft } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import OffCanvas from './OffCanvas';
// import mn from '../Modules/companyreview/CompanyReview'


export default function Header() {
	return (
		<>
		
		<header>
			<section className="theme-bg">
				<Container className="">
					<div>
						<ul className="font-inter manu-font-one fw-semibold text-white d-flex justify-content-end py-1">
							<li className="pe-3">
								<Link href="/" className="text-light">
									HOW TO BUY
								</Link>
							</li>
							<li className="pe-3">
								<Link href="/" className="text-light">
									B2B SALES
								</Link>
							</li>
							<li className="pe-3">
								<Link href="/" className="text-light">
									SIGN IN
								</Link>
							</li>
							<li className="">
								<Link href="/" className="text-light">
									SIGN UP
								</Link>
							</li>
						</ul>
					</div>
				</Container>
			</section>

			{/* main manu start */}

			{/* <section className="main-manu">
				<div className="container p-0">
					<Navbar expand="lg" style={{ height: '90px' }}>
						<Container className="p-0" fluid>
							<Link href="/">
								<Image src={Logo} alt="Picture of the author" className="brand-logo" />
							</Link>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<Navbar.Collapse id="navbarScroll">
								<Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
									<Form className="d-flex justify-content-between form-item">
										<Form.Control
											type="search"
											placeholder="Search in ifad"
											className="me-2 rounded-0 search-field"
											aria-label="Search"
										/>
										<Button variant="" className="text-light border-0 font-inter fw-semibold rounded-0 form-item-btn">
											Search
										</Button>
									</Form>
								<div className="">
									<div className="icons d-flex mt-2">
										<OffCanvas/>
										<div className="border-end">
											<Link href="/" className="manu-icon">
												<IoMdCart size={'25px'} className="me-2" />
											</Link>
										</div>
										<div className="ms-2">
											<Dropdown>
												<Dropdown.Toggle className="manu-icon p-0">
													<FaUserCircle size={'25px'} className="" />
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Link href="/" className="logoutBtn text-dark d-flex">
														<MdOutlineLogout className="fs-6 me-1" />
														Logout
													</Link>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</div>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</div>
			</section> */}
			<section className="main-manu">
				<div className="container p-0">
					<Navbar expand="lg" style={{ height: '90px' }}>
						<Container className="p-0" fluid>
							<Link href="/">
								<Image src={Logo} alt="Picture of the author" className="brand-logo" />
							</Link>
							<Navbar.Toggle aria-controls="navbarScroll" />
							<Navbar.Collapse id="navbarScroll">
								<Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
									<Form className="d-flex justify-content-between form-item">
										<Form.Control
											type="search"
											placeholder="Search in ifad"
											className="me-2 rounded-0 search-field"
											aria-label="Search"
										/>
										<Button variant="" className="text-light border-0 font-inter fw-semibold rounded-0 form-item-btn">
											Search
										</Button>
									</Form>
								<div className="mt-1">
									<div className="icons d-flex align-items-center">
										<div className="border-end">
											<Dropdown>
												<Dropdown.Toggle className="manu-icon p-0v m-0">
													<FaUserCircle size={'25px'} />
												</Dropdown.Toggle>
												<Dropdown.Menu  className=" rounded-1">
													<Link href="/profile/Profile" className="d-flex align-items-center logoutBtn text-dark text-capitalize">
														<CiUser className="fs-6 me-1" />
														profile
													</Link>
													<Link href="/" className="d-flex align-items-center logoutBtn text-dark">
														<MdOutlineLogout className="fs-6 me-1" />
														Logout
													</Link>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="ms-0">
											<OffCanvas/>
										</div>
									</div>
								</div>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
				</div>
			</section>

			{/* main manu end */}

			<section className="bg-dark btn-hover">
				<Navbar bg="dark" expand="lg">
					<Container className="px-0">
						<div href="#">
							<NavDropdown
								className="p-0 me-auto rounded-0"
								title={
									<span className=" text-white text-inter px-4 py-3 d-flex align-items-center categories">
										<BiAlignLeft size={'15px'} className="me-2" />
										CATEGORIES
									</span>
								}
								id="navbarScrollingDropdown"
							>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">chips</Link>
									
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">Biscuit & Bakery</Link>
									
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">Grocery</Link>
									
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">Noodles</Link>
									
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">Snacks</Link>
									
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/allproducts/AllProducts" className="cate-drop">Home Care</Link>
									
								</NavDropdown.Item>
							</NavDropdown>
						</div>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto py-0 font-inter manu-font">
								<Nav.Link href="/" className="d-flex align-items-center all-icons font-14 me-3">
									
									home
								</Nav.Link>


								<NavDropdown
									className="p-0 me-auto rounded-0"
									title={
										<span className=" text-white text-inter font-14 me-3 d-flex all-icons align-items-center">
											about us
										</span>
									}
									id="navbarScrollingDropdown"
								>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/review/Creview" className="cate-drop">Company Review</Link>
								</NavDropdown.Item>
								<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
									<Link href="/bod/Bod" className="cate-drop">Board of directors</Link>
								</NavDropdown.Item>
							</NavDropdown>

								<Nav.Link href="#terms" className="d-flex align-items-center all-icons font-14 me-3">
									TERMS & CONDITION
								</Nav.Link>
								<Nav.Link href="#policy" className="d-flex align-items-center all-icons font-14 me-3">
									PRIVACY POLICY
								</Nav.Link>
								<Nav.Link href="#delivery" className="d-flex align-items-center all-icons font-14">
									DELIVERY INFORMATION
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</section>
		</header>
		</>
	);
}
