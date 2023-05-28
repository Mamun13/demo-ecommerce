import React from 'react'
import UserProfileFilter from './UserProfileFilter'
import { Container , Col} from 'react-bootstrap'

const UserProfile = () => {
  return (
    <>
      <section>
        <Container>
          <Col lg={9} className="filter-demo">
            <div className="my-4">
              <h1 className="text-capitalize font-30 font-poppins font-32 fw-bold">account </h1>
              <p className="text-capitalize font-20 font-poppins">Md Mamun Ali</p>
              <p className="font-lato">Email: mamuncse82@gmail.com</p>
            </div>
            <UserProfileFilter/>
          </Col>
        </Container>
      </section>
    </>
  )
}

export default UserProfile