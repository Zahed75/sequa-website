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
            <div className='font-default'>
                <Navbar/>
                <div className='main-container content-top-banner flex flex-col items-start pt-12 text-white'>
                    <h1 className='text-[2.5rem] md:text-xxl font-extrabold text-start mt-24 leading-tight md:leading-[96px] w-full sm:w-4/5 lg:w-2/3'>Sailing the Blue Revolution</h1>
                    <p className='text-sm font-normal mt-3 mb-7 w-full sm:w-4/5 lg:w-1/2'>Integrated Fisheries + Aquaculture commerce for the world.</p>
                    <a href='#goals' className='button-fill-blue green-outline-hover button'>Learn more</a>
                    <div className='flex justify-center w-full'>
                        <a href='#about' className='duration-300 ease-out transition-all flex justify-center'><h3 className='text-white arrow-bounce '><BsArrowDownCircle className='' size='40px' /></h3></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;