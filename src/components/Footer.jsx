import React from 'react'

const Footer = () => {
  return (
    <div className='foot p-3'>
      <div className="container-fluid">
        <div className="">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <h6 className='mx-3 my-0'>Contact me</h6>
            <h6 className='mx-3 my-0'>
              <i className="bi bi-telephone"></i>
              6262772296
            </h6>
            <h6 className='mx-3 my-0'>
              <i className="bi bi-envelope"></i>
              xinchen.20@ucl.ac.uk
            </h6>
            <ul className="list-unstyled d-flex ms-auto my-0">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-linkedin"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-instagram"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer