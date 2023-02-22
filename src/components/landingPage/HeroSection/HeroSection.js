import React from 'react';
import Navbar from '../../Navbar/Navbar'
import video from '../../../assets/Hero-Video.mp4'
import { BsArrowDownCircle } from 'react-icons/bs';
import './HeroSection.css'

const HeroSection = () => {
    const hideResources = () => {
        const dropdown = document.getElementById('resources-dropdown')
        dropdown.classList.add('hidden')
    }

    return (
        <div className='banner-container' onDoubleClick={hideResources} id='home'>
            <video autoPlay loop muted playsInline src={video} className="video">
            </video>
            <div className=''>
                <Navbar/>
                <div className='main-container content-top-banner flex flex-col items-start pt-12'>
                    <h1 className='text-xl md:text-xxl font-extrabold font-default text-start mt-24 text-white leading-tight md:leading-[96px] w-full sm:w-4/5 lg:w-2/3'>Sailing the Blue Revolution</h1>
                    <p className='text-sm font-normal font-default mt-7 mb-7 text-white w-full sm:w-4/5 lg:w-2/3'>Integrated ocean fisheries and marine aquaculture commerce for the world so that everyone can feel good about it.</p>
                    <button className='button-fill-blue button'>Learn more</button>
                    <div className='flex justify-center w-full'>
                        <a href='#about' className='duration-300 ease-out transition-all'><h3 className='text-white arrow-bounce '><BsArrowDownCircle className='' size='40px' /></h3></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;