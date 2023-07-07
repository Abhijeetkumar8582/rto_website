import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top " style={{ padding: ' 10px 10px', backgroundColor: 'white' }}>
                <div class="container-fluid" style={{ color: 'white' }}>
                    <div style={{color:'white'}}>
                        <img src="Precify_Logo.png" className='Precify_Logo' />
                        <Link  class="navbar-brand PrecifyLogo_text active" href="/">Precify Commerce</Link>
                    </div>
                    <button class="navbar-toggler" type="button" style={{backgroundColor:'#c2c2c2'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link  active" aria-current="page" href="#">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link  active" href="#">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" href="Component/ContactUs">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar