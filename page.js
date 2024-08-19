import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import SZA1Image from './SZA1.jpg';
import N3Image from './N3.jpg';
import illitImage from './illit.png';
import brbImage from './brb.jpg';
import maxImage from './max.jpg';
import justinImage from './justin.jpg';




export default function Home() {
  return (
<>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container my-2">
          <img src="/photo/logo.png" className="#" alt="..." width={40} height={40} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="page.js">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/service">Service</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/Contact">Contact</Link>
              </li>
            <Link href="/signup" class="btn btn-outline-primary" disabled>SignUP</Link>&nbsp;
            <Link href="/signin" class="btn btn-outline-primary" disabled>Signin</Link>&nbsp;
            </ul>
          </div>
        </div>
      </nav> 


      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="1" 
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="2" 
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={SZA1Image} className="d-block w-100" alt="SZA" />
          </div>
          <div className="carousel-item">
            <Image src={maxImage} className="d-block w-100" alt="max" />
          </div>
          <div className="carousel-item">
            <Image src={justinImage} className="d-block w-100" alt="justin" />
          </div>
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleIndicators" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




      <div className="container">
        <div className="row my-2">
          <div className="card shadow-sm" style={{ width: '27.5rem' }}>
            <Image src={brbImage} className="card-img-top" alt="brb" width={310} height={360}/>
          </div>
          <div className="card shadow-sm" style={{ width: '27.5rem' }}>
            <Image src={N3Image} className="card-img-top" alt="N3" width={310} height={360}/>
          </div>
          <div className="card shadow-sm" style={{ width: '27.5rem' }}>
            <Image src={illitImage} className="card-img-top" alt="illit" width={310} height={360}/>
          </div>
        </div>

        <footer>
            <div className="container-fluid bg-white">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>รายการ</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Service 
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </footer >

      </div>
</>

  );
}