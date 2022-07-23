import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed-bottom'>
        <div className='container-fluid bg-dark pb-1'>
            <div className='row text-center'>
                <div className='col-md text-white'>
                    <p>Drumat - DrumShop // Avenida SiempreViva 1234 - Bs. As. - Argentina</p>
                </div>

                <div className='d-flex col justify-content-center align-items-center'>
                    <a href='https://www.linkedin.com/in/matias-afonso-estanqueiro-1a2381213/'><img src='/img/icon_fb.png' alt='facebook' /></a>
                </div>

                <div className='d-flex col justify-content-center align-items-center'>
                    <a href='https://instagram.com/drumat.ae17'><img src='/img/icon_ig.png' alt='instagram' /></a>
                </div>

                <div className='d-flex col justify-content-center align-items-center'>
                    <a href='#offcanvasRight' data-bs-toggle='offcanvas' role='button' aria-controls='sidebar'><img src='/img/icon_gm.png' alt='gmail' /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer