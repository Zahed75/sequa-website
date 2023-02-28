import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { SiCrunchbase } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { TiLocation } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <div className='bg-navyblue'>
            <div className='main-container py-16 font-default'>
                <div className='pb-7 flex flex-wrap sm:flex-row gap-5 font-default justify-between'>
                    <div className='max-w-[326px] text-white text-xs font-normal font-default'>
                        <a href='/home' className=' text-xl font-extrabold flex flex-col leading-tight'><span className='text-white text-[3rem]'>Transforming</span><span className='text-green'>into data-driven</span></a>
                        <p className='mt-2'>Integrated ocean fisheries and marine aquaculture commerce for the world so that everyone can feel good about it.</p>
                        <div className='flex gap-3 mt-7 items-center'>
                            <p>Follow us on:</p>
                            <a href='https://www.facebook.com/seaquaglobal' target='_blank' className='icon-white'><FaFacebook size='22px' /></a>
                            <a href='https://www.linkedin.com/company/seaqua' target='_blank' className='icon-white'><SiLinkedin size='22px' /></a>
                            <a href='https://www.crunchbase.com/organization/seaqua' className='icon-white' target='_blank' ><SiCrunchbase size='22px' /></a>
                        </div>
                    </div>
                    {/* content- */}
                    <div className='flex flex-col gap-3.5 w-[123px] text-xs text-white font-normal'>
                        <h5 className='font-extrabold opacity-50'>CONTENTS</h5>
                        <HashLink to='/home#about'>About</HashLink>
                        <HashLink to='/home#solutions'>Solutions</HashLink>
                        <HashLink to='/home#partners'>Partners</HashLink>
                        <HashLink to='/home#press-room'>Press Room</HashLink>
                        <Link to='https://drive.google.com/drive/folders/1Eh7U-4yqA8FFCQ4b6Hq3pu_Y_VHKTvmE' target='_blank'>Media Kit</Link>
                    </div>

                    <div className='flex flex-col gap-3.5 text-white text-xs font-normal'>
                        <h5 className='font-extrabold opacity-50'>GET IN TOUCH</h5>
                        <a className='block  flex items-center gap-2.5' href='tel:+8801840334113'><span><BsTelephoneFill className='icon-white' size='22px' /></span>+880 18403 34113</a>
                        <a className='block  flex items-center gap-2.5' href='tel:+8801624131260'><span><BsTelephoneFill className='icon-white' size='22px' /></span>+880 16241 31260</a>
                        <a className='flex items-center gap-2.5' href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrdBrjKgnfKSCWQkpJgxnwPCbGtwplWfWcxNJPDDZjvmkfzlNkjVbGfChZKVLhNnKBpDt' target='_blank'><span><IoMdMail className='icon-white' size='22px' /></span>business@seaqua.io</a>
                    </div>
                    <div className='flex flex-col gap-3.5 max-w-[350px] text-white text-xs font-normal'>
                        <h5 className='font-extrabold opacity-50'>LOCATIONS</h5>
                        <p className='flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px' /></span>Registered Office: Ventura Iconia, Level 3, House 37, Road 11, Block H, Banani C/A, Dhaka-1213</p>
                        <p className='flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px' /></span>Regional Office: Holding No 243, Airport Road, Next to Fishery Ghaat, Nuniachara, Cox's Bazar-4700</p>
                        <p className='flex items-center gap-2.5'><span><TiLocation className='icon-white' size='22px' /></span>Regional HQ (Chattogram): Chattogram Software Technology Park, Agrabad Access Rd, Chattogram-4100</p>
                    </div>
                </div>

                <hr className='text-white opacity-25' />
                <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between pt-7 text-white text-xs font-normal'>
                    <div><p className=''>© 2023 Seaqua Limited. All Rights Reserved.</p></div>
                    <div className='flex gap-5 sm:gap-7'>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                        <Link to='/terms-conditions'>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;