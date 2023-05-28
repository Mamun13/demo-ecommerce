import React from 'react';
import Image from 'next/image'
// import Payment from '../../public/payment1.png'
import Payment2 from '../../public/payment2.png'
import Api from '../../public/API-footer-logo.png'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';


export default function Footer() {
	return (
		<>
      <section className='bg-dark text-white'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="ps-0 p-3">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase about-border position-relative">about us</h2>
                <p className="text-justify font-lato pt-3">Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <ul className="d-flex justify-content-start">
                <li className="pe-3 ">
                  <Link href="/" className='soical-link'>
                    <BsFacebook size={"20px"}/>
                  </Link>
                </li>
                <li className="pe-3 " >
                  <Link href="/" className='soical-link'>
                    <AiFillLinkedin size={"20px"}/>
                  </Link> 
                </li>
                <li>
                  <Link href="/" className='soical-link'>
                    <FaYoutube size={"20px"}/>
                  </Link>   
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="p-3 ps-5">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative information-border">information</h2>
                <ul className="lh-lg font-lato pt-3">
                 
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>about us
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>privacy & policy
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>terms & conditions
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>refund policy
                    </Link>
                  </li>
               </ul>
              </div>
            </div>
            <div className="col-lg-3">
            <div className="p-3 ps-5">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative account-border">my account</h2>
                <ul className="lh-lg font-lato pt-3">

                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>login
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>my cart
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>wish list
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link href="/" className=" d-flex align-items-center account-hover">
                      <IoIosArrowRoundForward size={"20px"}/>my account
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-3">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative payment-border">payment option</h2>
                <Link href="/" className="pt-3">
                  <Image
                    src={Payment2}
                    alt="Picture of the author"
                    className="payment-img mt-3 rounded"
                  />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
			<footer className="text-center shadow-inner footer-bg  ">
        <div className="d-flex justify-content-center">
				  <p className="text-center text-light p-0 mt-3 mb-3 pe-2 font-lato">© 2023 IFAD Group. All Rights Reserved | Developed by </p>
            <Link href="https://api.net.bd/" target="_blank">
              <Image src={Api} alt="" className="logo-resize " />
            </Link>
        </div>
			</footer>
		</>   
	);
}


