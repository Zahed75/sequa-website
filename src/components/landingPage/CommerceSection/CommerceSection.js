import React from 'react';
import retail from '../../../assets/retail-icon.png'
import wholesale from '../../../assets/wholesale-icon.png'
import global from '../../../assets/golbal-supply-icon.png'
import './CommerceSection.css'
import WhiteNavbar from '../../WhiteNavbar/WhiteNavbar';

const CommerceSection = () => {
    const hideResources = () => {
        const dropdown = document.getElementById('resources-dropdown-white')
        dropdown.classList.add('hidden')
    }
    return (
        <div className='bg-white  overflow-hidden' id='about' onDoubleClick={() => hideResources()}>
            <WhiteNavbar/>
            <div className='main-container pt-32 pb-32 flex flex-col lg:flex-row items-center font-default'>
                <div className='w-full lg:w-1/2 pr-0 lg:pr-4 text-black'>
                    <h2 className='section-header'>Integrated Blue Food commerce for everyone</h2>
                    <h4 className='text-md md:text-lg font-medium border-t-2 border-ash py-2 mt-7'>Be it Ocean Fisheries</h4>
                    <h4 className='text-md md:text-lg font-medium border-y-2 border-ash py-2'>Be it Marine Aquaculture</h4>
                    <p className='text-sm font-normal mt-7 w-4/5'>We bring commerce to all stakeholders in the value chain, Making it more rewarding for everyone who can feel good about it.</p>
                </div>
                <div className='w-full lg:w-1/2 mx-5 pl-0 lg:pl-4'>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={retail} alt='' />
                        <h5 className='text-lg text-black font-medium'>Retail</h5>
                    </div>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={wholesale} alt='' />
                        <h5 className='text-lg text-black font-medium'>Wholesale</h5>
                    </div>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={global} alt='' />
                        <h5 className='text-lg text-black font-medium'>Global Supply</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommerceSection;