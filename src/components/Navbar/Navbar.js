import React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='main-container'>
            
            <div className="navbar navbar-container flex justify-between w-full">
                <div className="navbar-start flex justify-between w-screen">
                    <img className='w-44' src={logo} alt='' />
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="p-3 cursor-pointer text-white transition-all ease-in duration-300 humburger flex justify-center bg-transparent border-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-lg w-52">
                            <li><a className="text-white font-default font-normal hover:font-medium" href="/">Home</a></li>
                            <li><a className="text-white font-default font-normal hover:font-medium" href="/">About</a></li>
                            <li><a className="text-white font-default font-normal hover:font-medium" href="/">Solutions</a></li>
                            <li><a className="text-white font-default font-normal hover:font-medium" href="/">Partners</a></li>
                            

                            <li tabIndex={0}>
                                <a href='/' className="justify-between text-white font-default font-normal hover:font-medium">
                                    Resources
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul style={{marginLeft: '-300px'}} className="shadow-lg bg-transparent">
                                    <li><a className="text-white text-end font-default font-normal hover:font-medium" href="/">Press Room</a></li>
                                    <li><a className="text-white text-end font-default font-normal hover:font-medium" href="/">Media Kit</a></li>
                                </ul>
                            </li>
                            <li>
                                <button className="text-white bg-blue nav-btn border-0 font-default font-normal hover:font-medium rounded-none normal-case px-2 py-2 sm:px-4 sm:py-2 transition-all ease-in" href='/'>Contact Us</button>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-white font-default font-normal hover:font-medium" href="/">Home</a></li>
                        <li><a className="text-white font-default font-normal hover:font-medium" href="/">About</a></li>
                        <li><a className="text-white font-default font-normal hover:font-medium" href="/">Solutions</a></li>
                        <li><a className="text-white font-default font-normal hover:font-medium" href="/">Partners</a></li>
                        
                        <li tabIndex={0}>
                            <a className="text-white font-default font-normal hover:font-medium" href="/">
                                Resources
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-transparent">
                                <li><a className="text-white font-default font-normal hover:font-medium" href="/">Press Room</a></li>
                                <li><a className="text-white font-default font-normal hover:font-medium" href="/">Media Kit</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <button className="button-outline-white nav-btn button normal-case transition-all ease-in" href='/'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;