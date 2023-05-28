import React from 'react'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/row'
import Image from 'next/image'
import ProfileImg from "../../../public/profile.jpg"
import Form from 'react-bootstrap/Form';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import ImageUpload from "./ImageUpload"

const AccountInformation = () => {  
  return (
    <>
      <Form>
        <Row>
          <Col lg={4}>
            <div className="d-flex justify-content-center mb-3">
              <Image src={ProfileImg} alt="" className="profile-picture d"/>
            </div>
            <div className="">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" className="rounded-0 form-deco"/>
              </Form.Group>
            </div>
            {/* <ImageUpload cardName="Input Image" /> */}
          </Col>

          <Col lg={8}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="rounded-0 font-lato form-deco"/>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your mail" className="rounded-0 font-lato form-deco"/>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" className="rounded-0 font-lato form-deco"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label> 
              <Form.Select aria-label="Default select example" className="rounded-0 font-lato text-capitalize form-deco">
                <option>Open this select menu</option>
                <option value="1">male</option>
                <option value="1">female</option>
                <option value="2">other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            </Form.Group>

          </Col>
        </Row>
      </Form>
    </>
  )
}

export default AccountInformation