import React from 'react';
import Navbar from '../../Navbar/Navbar'
import video from '../../../assets/Hero-Video.mp4'
import { BsArrowDownCircle } from 'react-icons/bs';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='banner-container' id='home'>
            <video autoPlay loop muted playsInline src={video} className="video">
            </video>
            <div className=''>
                <Navbar/>
                <div className='main-container content-top-banner flex flex-col items-start'>
                    <h1 className='text-xl md:text-xxl font-extrabold font-default text-start mt-24 text-white leading-tight md:leading-96 w-full sm:w-4/5 lg:w-2/3'>Sailing the Blue Revolution</h1>
                    <p className='text-xs md:text-sm font-normal font-default mt-7 mb-7 text-white w-full sm:w-4/5 lg:w-2/3'>Integrated ocean fisheries and marine aquaculture commerce for the world so that everyone can feel good about it.</p>
                    <button className='button-fill-blue button'>Learn more</button>
                    <div className='flex justify-center w-full'>
                        <a href='#commerce-section' className='duration-300 ease-out transition-all'><h3 className='text-white arrow-bounce '><BsArrowDownCircle className='' size='40px' /></h3></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;