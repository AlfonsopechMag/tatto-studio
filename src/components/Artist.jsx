import React from 'react'
import artits_rafa from "../images/profit_rafa.jpg"
import barber_rony from "../images/profit_rony.jpg"

export default function Artist() {
  return (
    <div
      className="artist d-flex justify-content-center align-items-center py-5"
      id="Artist"
    >
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="row">
          <h1 className="col-12 text-center titulo pt-5 mt-5"> ARTISTS</h1>
          <div className="col"></div>
          <div className="col-12 d-flex justify-content-center">
            <img
              src="https://i.ibb.co/NV1sYJk/17.png"
              alt="17"
              border="0"
            ></img>
          </div>

          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row justify-lg-content-end  my-5">
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">
              <img
                className="col-12"
                src={artits_rafa}
                alt=""
                srcset=""
                style={{width: "648px", height:"432px"}}
              />
            </div>
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center ">              
              <h3 className="text-start">Rafael Leal</h3>
              {/* <p className="col col-sm-8 mx-auto p-3">
              The traditional Japanese style, aka Irezumi, originated during the Edo period (1603-1868) alongside ukiyo-e — woodblock prints that were hugely popular among the merchant class at the time. Because of this, the icons found in this time-tested genre of body art come from the country's age-old folklore, featuring tattooed heroes from the Suikoden and mythological creatures like dragons, kirins, and phoenixes. In short, every tattoo done in this style tells a story about Japans rich past, and beyond their dramatic smoke and wave filled appearance, this is what makes Irezumi masterpieces so powerful.
              </p> */}
            </div>
          </div>

          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row-reverse justify-lg-content-end  my-5">
            <div className="col-12 col-xl-6">
              <img
                className="col-12"
                src="https://i.postimg.cc/5twjnNQL/a-1.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">              
              <h3 className="text-start">Erick Leal</h3>
             {/*  <p className="col col-sm-8 mx-auto p-3">
                The traditional style, also called old school tattoo style,               
                filled with the history of tattooing. You can't really go wrong
                with a piece in this genre!
              </p> */}
            </div>
          </div>    
          <h1 className="col-12 text-center titulo pt-5 mt-5"> Barber</h1>
          <div className="col"></div>
          <div className="col-12 d-flex justify-content-center">
            <img
              src="https://i.ibb.co/NV1sYJk/17.png"
              alt="17"
              border="0"
            ></img>
          </div>
          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row justify-lg-content-end  my-5">
          <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">
            <img
              className="col-12"
              src={barber_rony}
              alt="barber_rony"
              srcset=""
              style={{width: "648px", height:"432px"}}
            />
          </div>
          <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center ">            
            <h3 className="text-start">Ronaldo Pérez</h3>
            {/* <p className="col col-sm-8 mx-auto p-3">
            The traditional Japanese style, aka Irezumi, originated during the Edo period (1603-1868) alongside ukiyo-e — woodblock prints that were hugely popular among the merchant class at the time. Because of this, the icons found in this time-tested genre of body art come from the country's age-old folklore, featuring tattooed heroes from the Suikoden and mythological creatures like dragons, kirins, and phoenixes. In short, every tattoo done in this style tells a story about Japans rich past, and beyond their dramatic smoke and wave filled appearance, this is what makes Irezumi masterpieces so powerful.
            </p> */}
          </div>
        </div>       
        </div>
      </div>
    </div>
  )
}
