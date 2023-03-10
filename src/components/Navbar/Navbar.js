import React from 'react';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import pressIcon from '../../assets/press-resources-icon.png'
import folderIcon from '../../assets/folder-icon.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [resourcesOpen, setResourcesOpen] = useState(false)
    const showResources = () => {
        const dropdown = document.getElementById('resources-dropdown')
        dropdown.classList.remove('hidden')
    }
    const hideResources = () => {
        const dropdown = document.getElementById('resources-dropdown')
        setTimeout(() => dropdown.classList.add('hidden'), 2000)


    }
    return (
        <div className='main-container'>

            <div className="navbar navbar-container flex justify-between items-center w-full font-default">
                <div className='bg-transparent w-full pt-3 flex items-center justify-between'>
                    <a href='/home' className='max-w-[180px]'><img src={logo} className='max-w-[180px] pb-3 z-0' alt='' /></a>
                    <div className={`lg:bg-transparent rounded-b-[20px] bg-white w-full lg:w-max lg:flex justify-end lg:justify-center duration-500 lg:pt-0 pt-11 ease-in right-0 lg:left-auto pb-3 lg:pb-0 absolute lg:static ${open ? 'top-0' : 'top-[-550px]'}`}>
                        <ul className='flex flex-col items-center lg:flex-row gap-0 lg:gap-[40px] divide-y lg:divide-none divide-ash font-normal text-xs test-black lg:text-white'>
                            <li className='hover:font-bold w-full py-4 flex justify-center '><a href='#about'>About</a></li>
                            <li className='hover:font-bold w-full py-4 flex justify-center '><a href='#solutions'>Solutions</a></li>
                            <li className='hover:font-bold w-full py-4 flex justify-center '><a href='#partners'>Partners</a></li>
                            <li className='hover:font-bold w-full py-4 flex flex-col items-center 'onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
                                <a onMouseMove={() => showResources()} onTouchStart={() => showResources()} onMouseLeave={() => hideResources()} className='resources-link-nav flex gap-2 items-center cursor-pointer'>Resources<FiChevronDown size='20px' className={`${resourcesOpen ? 'rotate-180' : 'rotate-0'}`}/></a>
                                <ul id='resources-dropdown' className='drop-shadow-2xl mt-8 px-8 py-5 rounded-[20px] hidden absolute flex flex-col items-left bg-white divide-y divide-ash'>
                                    <li className='hover:font-bold w-full py-4 flex justify-left'>
                                        <a href='#press-room' className='block flex text-black font-normal hover:font-bold items-center gap-3.5'><img className='w-[37px]' src={pressIcon} alt='' />Press Room</a>
                                    </li>
                                    <li className='hover:font-bold w-full py-4 flex justify-left'>
                                        <a href='https://drive.google.com/drive/folders/1Eh7U-4yqA8FFCQ4b6Hq3pu_Y_VHKTvmE' target='_blank' className='block flex font-normal hover:font-bold text-black items-center gap-3.5'><img className='w-[37px]' src={folderIcon} />Media Kit</a>
                                    </li>
                                </ul>
                            </li>

                            <li className='hover:font-bold w-full py-4 flex justify-center '><a href='#contact' className='button button-outline-blue w-[154px] text-[18px] font-bold block lg:hidden'>Contact Us</a></li>
                        </ul>

                    </div>
                    <div><a href='#contact' className='button button-outline-white text-sm font-bold hidden lg:block'>Contact us</a></div>

                </div>
                <div className='cursor-pointer z-0' onClick={() => setOpen(!open)}>
                    {
                        open ? <h3 className='block lg:hidden text-black'><IoMdClose size='24px' /></h3> : <h3 className='block lg:hidden text-white'><CgMenu size='24px' /></h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;