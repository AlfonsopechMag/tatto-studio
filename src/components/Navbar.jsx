import React from 'react'
import { useEffect } from 'react'
import logo from "../images/royal_tatto.png"

export default function Navbar() {
  useEffect(()=>{
    const logo = document.getElementById("logo");

    window.addEventListener('scroll', function(){
        if (this.window.pageYOffset > 1) {
            logo.classList.add("logo");
        }else{
            logo.classList.remove("logo");
        }
    })
  },[])
  
  
    return (
    <div className='fixed-top w-100 bg-dark'>
        <nav className='nav navbar navbar-expand-lg navbar-dark'>
            <div className='container-fluid d-flex flex-row flex-lg-column justify-content-space-around justify-content-lg-center'>
                <div className='navbar-brand top-header bg-dark text-center d-flex justify-content-lg-center me-auto m-lg-0 ps-3 p-lg-0'>
                    <img src={logo} alt="20" id='logo'></img>
                </div>
                <button className="navbar-toggler fixed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse collapse text-light"  id="navbarSupportedContent">
                    <ul className="navbar-nav     text-center  text-uppercase">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#Artist">Artist & Barber</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#Gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#Piercing">Piercing</a>
                        </li>                
                        <li className="nav-item">
                            <a className="nav-link " href="#Contact">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
