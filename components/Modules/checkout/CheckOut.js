import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import PaymentImage from '../../../public/Payment.jpg'
import { TbCurrencyTaka } from 'react-icons/tb';

const CheckOut = () => {
  return (
    <>
      <section className=" ">
        <div className="position-relative mn">
          <Image src={PaymentImage} alt="" className=" payment"/>
          <h1 className="pay-banner-text text-light text-uppercase font-48 fw-bold">payment</h1>
        </div>
        <Container>
          <Form>
            <Row>
              <Col lg={8} className=' mt-4'>
                <h1 className="text-uppercase font-24 fw-bold mb-3">BILLING DETAILS</h1>
                  <Row>
                    <Col lg={6} className=''>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                    <Col lg={6} className=''>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                    <Col lg={12} className=''>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Company Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Address <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 mb-3 form-deco'/>
                      </Form.Group>
                    </Col>
                    
                    <Col lg={12}>
                      <div className="mb-3">
                        <Form.Label className="text-capitalize">town / city <span className="text-danger">*</span></Form.Label>
                        <Form.Select aria-label="Default select example" className="rounded-0 select-shadow">
                          <option>select country</option>
                          <option value="1">Dhaka</option>
                          <option value="2">Rajshahi</option>
                          <option value="3">Chittagong</option>
                        </Form.Select>
                      </div>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Postcode / Zip <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                    
                    
                    <Col lg={6} className=''>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                    <Col lg={6} className=''>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label className='font-lato'>Email Address <span className="text-danger">*</span></Form.Label>
                        <Form.Control type="text" placeholder="" className='rounded-0 form-deco'/>
                      </Form.Group>
                    </Col>
                  </Row>
              </Col>
              <Col lg={4} className=' mt-4'>
                <div className="payment-card p-3">
                  <h2 className="text-uppercase font-24 fw-bold ps-2">your order</h2>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col" className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="fw-normal text-capitalize font-16 ">pillow chips</th>
                        <td className="text-end"> 100Tk</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fw-normal text-capitalize font-16 ">wavy chips</th>
                        <td className="text-end">200Tk</td>
                      </tr>
                      <tr>
                        <th scope="row" className="fw-normal text-capitalize font-16 ">choco delight</th>
                        <td className="text-end">200Tk</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="">
                    <div className="d-flex justify-content-center">
                      <p className="font-lato text-capitalize font-20 pe-2">subtotal :- </p>
                      <p className=" font-20 ">1000 Tk</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="font-lato text-warning text-capitalize font-20 pe-2">total :- </p>
                      <p className="font-20 theme-text">1000 Tk</p>
                    </div>
                  </div>
                  <div className="">
                    <button className="text-capitalize font-16 w-100 place-order mt-4 font-lato fw-bold theme-text">place order</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>                                                 
        </Container>
      </section>
    </>
  )
}

export default CheckOut