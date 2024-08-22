import React from 'react'

export default function Contact() {
  return (
    <div className='container d-flex flex-column justify-content-center text-center' id='Contact'>
        <div className="col-12 d-flex  justify-content-center pt-5">
          <img src="https://i.ibb.co/TbrVcwt/19.png" alt="19" border="0"></img>
        </div>
        <h1 className='text-center mx-auto  titulo text-uppercase'> Contact us </h1>
        <div className="col-6 mx-auto ">
          <h2 className='text-center fw-bold mt-5'>ADRESS</h2>
          <p>
              Amp. La Gloria MZA 250 LT 01, Isla mujeres Q. Roo.
              <br />
              Tel: +52 (998) 299 1977
              <br />
              rafa.diseno92@gmail.com</p>
        </div>
        
        <div className="col-6 mx-auto p-0">
            <h2 className='text-center fw-bold my-3'>OPENING HOURS</h2>
            <p>
                Monday - Saturday: 11am - 10pm                
            </p>
        </div>
    </div>
  )
}
