import React from 'react'
import BlackButton from '../components/Buttons/BlackButton'
import WhiteButton from '../components/Buttons/WhiteButton'

function Header() {
    return (
        <>
            <header className='sticky top-0'>
                <nav className="navbar navbar-expand-lg shadow-md py-1 bg-white relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex flex-wrap items-center justify-between">
                        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                                <li className='nav-item lg:px-4'>
                                    <img className='py-3' src="../../images/logo.png" width="70px" alt="" />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px lg:py-7 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">STARBUCKS REWARD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px-2 lg:py-7 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">MENÜ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px-2  lg:py-7 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">KAMPANYALAR</a>
                                </li>
                                <li className="nav-item mb-2 lg:mb-0">
                                    <a className="nav-link block pr-2 lg:px-2 lg:py-7 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest  text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">KURUMSAL SATIŞ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-collapse collapse grow items-left pl-24" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto lg:flex lg:flex-row pl-24">
                                <li className='nav-item lg:px-2'>
                                    <img className='py-6' src="../../images/konum.png" width="26px" alt="" />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-3  lg:py-7 py-2 font-sans font-bold text-black hover:text-black text-sm focus:text-black transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Mağazalarımız</a>
                                </li>
                                <li className="nav-item py-5 pl-2">
                                    <WhiteButton title='Gelen kutusu' color='black' />
                                </li>
                                <li className="nav-item py-5 pl-10" >
                                    <WhiteButton title="Giriş" color='black' />
                                </li>
                                <li className="nav-item py-5">
                                    <BlackButton title='Hemen Katıl' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>





            </header></>
    )
}

export default Header