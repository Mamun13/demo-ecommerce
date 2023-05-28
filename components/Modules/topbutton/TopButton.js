import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const TopButton = () => {
  return (
    <>
       {/* <h1>Hello, world!</h1>
      <div style={{ marginTop: "150vh" }} /> */}
      <ScrollToTop
      color={"white"}
      smooth className='topbutton'/>
    </>
  )
}

export default TopButton