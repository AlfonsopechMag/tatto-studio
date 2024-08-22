import React from 'react'

export default function Welcome() {
  return (
    <div className='welcome container bg-light  my-5' id='welcome'>
      <div className="row  ">
          <div className="col-12 col-md-6 d-flex   justify-content-center align-items-center ">
              <h1 className="col-12 fw-bold text-end lh-sm m-0 p-0 subtitulo">
                  WELCOME TO <br />
                  ROYAL <br />
                  TATTOO & BARBER 
              </h1>
            
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-3">
              <p className='col-12 col-lg-8 me-lg-auto my-auto fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero dolorem, repellendus quod eum autem nobis assumenda fugiat, reiciendis odit vel voluptatum rerum dolore explicabo sint adipisci temporibus. Quia neque explicabo tempora eum vero? <br /><br /> Beatae quos officia temporibus, autem similique reiciendis repellendus dolor magnam odit, fuga, voluptatum neque assumenda! Cupiditate!</p>
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center justify-content-md-around py-5 p-lg-0'>                  
              <div className="vr bg-dark ms-md-auto p-0" style={{height:"100%",backgroundColor:"#000"}}></div>
                  <h4 className='d-flex align-items-center   fw-bold m-0 px-5'>NOW OPEN 6 DAYS A WEEK!</h4>
              <div className="vr bg-dark m-0 p-0" style={{height:"50px",backgroundColor:"#000"}}></div>
          </div>
      </div>
    </div>
  )
}
