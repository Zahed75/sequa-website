import React from 'react';
import logo from '../../assets/Logo-blue.png'
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import pressIcon from '../../assets/press-resources-icon.png'
import folderIcon from '../../assets/folder-icon.png'

const WhiteNavbar = () => {
    const [open, setOpen] = useState(false)
    const showResources = () => {
        const dropdown = document.getElementById('resources-dropdown-white')
        dropdown.classList.remove('hidden')
    }
    const hideResources = () => {
        const dropdown = document.getElementById('resources-dropdown-white')
        setTimeout(() => dropdown.classList.add('hidden'), 2000)


    }
    return (
        <div id='white-navbar' className='fixed w-screen z-[9999] bg-white top-[-80px] duration-300 ease-out'>
            <div className='main-container'>

                <div className="navbar navbar-container flex justify-between items-center w-full ">
                    <div className='bg-white w-full py-2 flex items-center justify-between'>
                        <a href='/home' className='max-w-[180px]'><img src={logo} className='max-w-[180px] pb-3 z-0' alt='' /></a>


                        <div id='white_navbar_menu' className={`bg-white rounded-b-[20px] bg-white w-full lg:flex justify-end lg:justify-center duration-500 lg:pt-0 pt-11 ease-in right-0 lg:left-auto pb-3 lg:pb-0 absolute lg:static ${open ? 'top-0' : 'top-[-550px] hidden'}`}>
                            <ul className='flex flex-col items-center lg:flex-row gap-0 lg:gap-[40px] divide-y lg:divide-none divide-ash'>
                                <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a className=' text-xs text-black font-default' href='#home'>Home</a></li>
                                <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a className=' text-xs text-black font-default' href='#about'>About</a></li>
                                <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a className=' text-xs text-black font-default' href='#solutions'>Solutions</a></li>
                                <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a className=' text-xs text-black font-default' href='#partners'>Partners</a></li>
                                {/* <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a className=' text-xs text-black lg:text-white font-default' href='/home'>Resources</a></li> */}
                                <li className='list-none font-normal hover:font-bold w-full py-4 flex flex-col items-center '>
                                    <a onMouseMove={() => showResources()} onTouchStart={() => showResources()} onMouseLeave={() => hideResources()} className='resources-link-nav text-xs text-black font-default flex gap-2 items-center cursor-pointer'>Resources<FiChevronDown size='20px' /></a>
                                    <ul id='resources-dropdown-white' className='drop-shadow-2xl mt-8 p-8 rounded-[20px] hidden absolute flex flex-col items-left bg-white divide-y divide-ash'>
                                        <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-left'>
                                            <a href='#press-room' className='block text-xs text-black font-default flex items-center gap-3.5'><img className='w-[37px]' src={pressIcon} alt='' />Press Room</a>
                                        </li>
                                        <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-left'>
                                            <a href='https://drive.google.com/drive/folders/1Eh7U-4yqA8FFCQ4b6Hq3pu_Y_VHKTvmE' target='_blank' className='block text-xs text-black font-default flex items-center gap-3.5'><img className='w-[37px]' src={folderIcon} />Media Kit</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className='list-none font-normal hover:font-bold w-full py-4 flex justify-center '><a href='#contact' className='button button-outline-blue w-[154px] text-[18px] font-bold block lg:hidden'>Contact Us</a></li>
                            </ul>

                        </div>
                        <div><a href='#contact' className='button button-outline-blue w-[153px] text-[18px] font-bold hidden lg:inline-block'>Contact us</a></div>

                    </div>
                    <div className='cursor-pointer z-0' onClick={() => setOpen(!open)}>
                        {
                            open ? <h3 className='block lg:hidden text-black'><IoMdClose size='24px' /></h3> : <h3 className='block lg:hidden text-black'><CgMenu size='24px' /></h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiteNavbar;