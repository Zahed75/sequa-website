import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SiCrunchbase } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { TiLocation } from 'react-icons/ti';


const Footer = () => {
    return (
        <div className='bg-navyblue'>
            <div className='main-container py-16'>
                <div className='pb-7 flex flex-wrap sm:flex-row gap-5 justify-between'>
                    <div className='max-w-[316px]'>
                        <img src={logo} className='w-[185px]' alt=''/>
                        <p className='text-white font-xs font-normal font-default mt-7'>Integrated ocean fisheries and marine aquaculture commerce for the world so that everyone can feel good about it.</p>
                        <div className='flex gap-3 mt-7 items-center'>
                            <p className='text-white font-xs font-normal font-default'>Follow us on:</p>
                            <a href='/' className='icon-white'><FaFacebook size='22px'/></a>
                            <a href='/' className='icon-white'><SiLinkedin size='22px'/></a>
                            <a href='/' className='icon-white'><SiCrunchbase size='22px'/></a>
                        </div>
                    </div>
                    {/* content- */}
                    <div className='flex flex-col gap-3.5 w-[123px]'>
                        <h5 className='text-white font-xs font-extrabold font-default opacity-50'>CONTENTS</h5>
                        <a className='text-white font-xs font-normal font-default' href='/'>Home</a>
                        <a className='text-white font-xs font-normal font-default' href='/'>About</a>
                        <a className='text-white font-xs font-normal font-default' href='/'>Solutions</a>
                        <a className='text-white font-xs font-normal font-default' href='/'>Partners</a>
                        <a className='text-white font-xs font-normal font-default' href='/'>Press Room</a>
                        <a className='text-white font-xs font-normal font-default' href='/'>Media Kit</a>
                    </div>

                    <div className='flex flex-col gap-3.5 '>
                        <h5 className='text-white font-xs font-extrabold font-default opacity-50'>GET IN TOUCH</h5>
                        <a className='text-white font-xs font-normal block font-default flex items-center gap-2.5' href='/'><span><BsTelephoneFill className='icon-white' size='22px'/></span>+880 18403 34113</a>
                        <a className='text-white font-xs font-normal block font-default flex items-center gap-2.5' href='/'><span><BsTelephoneFill className='icon-white' size='22px'/></span>+880 16241 31260</a>
                        <a className='text-white font-xs font-normal font-default flex items-center gap-2.5' href='/'><span><IoMdMail className='icon-white' size='22px'/></span>business@seaqua.io</a>
                    </div>
                    <div className='flex flex-col gap-3.5 max-w-[350px]'>
                        <h5 className='text-white font-xs font-extrabold font-default opacity-50'>LOCATIONS</h5>
                        <p className='text-white font-xs font-normal font-default flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px'/></span>Registered Office: Ventura Iconia, Level 3, House 37, Road 11, Block H, Banani C/A, Dhaka-1213</p>
                        <p className='text-white font-xs font-normal font-default flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px'/></span>Regional Office: Holding No 243, Airport Road, Next to Fishery Ghaat, Nuniachara, Cox's Bazar-4700</p>
                        <p className='text-white font-xs font-normal font-default flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px'/></span>Regional HQ (Chattogram): Chattogram Software Technology Park, Agrabad Access Rd, Chattogram-4100</p>
                    </div>
                </div>

                <hr/>
                <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between pt-7'>
                    <div><p className='text-white font-xs font-normal font-default'>© 2023 Seaqua Limited. All Rights Reserved.</p></div>
                    <div className='flex gap-5 sm:gap-7'> 
                        <a href='/' className='text-white font-xs font-normal font-default'>Privacy Policy</a>
                        <a href='/' className='text-white font-xs font-normal font-default'>Terms & Condition</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;