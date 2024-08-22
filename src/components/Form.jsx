import React from 'react'

export default function Form() {
  return (
    <div className="container py-5 form" id='form'>
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto form-container d-flex flex-column  justify-content-end align-items-center">
          <form className='col-12 d-flex flex-column justify-content-center ms-auto'>
            <div className="col-12 mb-3  d-flex flex-column justify-content-start align-items-center">
                
                <input className='form-control ' type="email" class="form-control border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'></input>
                
            </div>
            <div class="col-12  mb-3 ">
                    
                    <input type="password " class="form-control  border-dark" id="exampleInputPassword1" placeholder='Password'></input>
            </div>
            <div class="col-12 mb-3 ">
                    
                    <input type="tel " class="form-control  border-dark" id="exampleInputPhone" placeholder='Tel:'></input>
            </div>                                    
          </form>                            
        </div>
        <div className="col-12 col-lg-7  mb-2 me-auto mx-auto d-flex flex-column align-items-center border-dark">
          <textarea class="form-control border-dark" id="exampleFormControlTextarea1" rows="3" style={{height:"100%"}} placeholder='Your comment..'></textarea>                                
        </div>
        <div className=" col-12 col-sm-10 d-flex justify-content-end my-2">
            <button  type="submit" class="btn btn-primary  px-5 py-2 bg-dark">Submit</button>
        </div>
      </div>                    
    </div>
  )
}
