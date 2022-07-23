import React from 'react'

const Main = () => {
    return (
        <div className='d-flex align-items-center' style={{width: '100vw', height: '80vh'}}>
            <div className='carousel slide w-100' data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='./img/home_mapex.jpg' className='img-fluid w-100' alt='bateria mapex' />
                    </div>
                    <div className='carousel-item'>
                        <img src='./img/home_zildjian.jpg' className='img-fluid w-100' alt='platillo zildjian' />
                    </div>
                    <div className='carousel-item'>
                        <img src='./img/home_evans.jpg' className='img-fluid w-100' alt='parche bateria evans' />
                    </div>
                    <div className='carousel-item'>
                        <img src='./img/home_tama.jpg' className='img-fluid w-100' alt='bateria tama ' />
                    </div>
                    <div className='carousel-item'>
                        <img src='./img/home_paiste.jpg' className='img-fluid w-100' alt='platillo paiste' />
                    </div>
                    <div className='carousel-item'>
                        <img src='./img/home_remo.jpg' className='img-fluid w-100' alt='parche bateria remo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main