import React from 'react'

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex flex-wrap items-center justify-between">
                        <div className="flex items-center">
                            <button
                                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    className="w-5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                                <li className='nav-item py-2 lg:px-6'>
                                    <img src="../../images/Starbucks_Corporation.png" width="49px" alt="" />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px lg:py-6 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">STARBUCKS REWARD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px-2 lg:py-6 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">MENÜ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block pr-2 lg:px-2  lg:py-6 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">KAMPANYALAR</a>
                                </li>
                                <li className="nav-item mb-2 lg:mb-0">
                                    <a className="nav-link block pr-2 lg:px-2 lg:py-6 py-2 font-Helvetica font-medium text-black hover:text-black tracking-widest  text-sm focus:text-gray-700 transition duration-150 ease-in-out antialiased" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">KURUMSAL SATIŞ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>





            </header></>
    )
}

export default Header