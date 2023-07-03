import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top " style={{ padding: ' 10px 10px', backgroundColor: 'black' }}>
                <div class="container-fluid" style={{ color: 'white' }}>
                    <div>
                        <img src='Precify_Logo.png' className='Precify_Logo' />
                        <a class="navbar-brand PrecifyLogo_text" href="#">Precify Commerce</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar