import React from 'react';
import retail from '../../../assets/retail-icon.png'
import wholesale from '../../../assets/wholesale-icon.png'
import global from '../../../assets/golbal-supply-icon.png'
import './CommerceSection.css'

const CommerceSection = () => {
    return (
        <div className='bg-white' id='commerce-section'>
            <div className='main-container pt-32 pb-32 flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-1/2 pr-0 lg:pr-4'>
                    <h2 className='text-xl font-default font-extrabold text-black'>Integrated Blue Food commerce for everyone</h2>
                    <h4 className='text-md text-black font-default font-medium border-t-2 border-ash py-2 mt-7'>Be it Ocean Fisheries</h4>
                    <h4 className='text-md text-black font-default font-medium border-y-2 border-ash py-2'>Be it Marine Aquaculture</h4>
                    <p className='text-sm text-black font-default font-normal mt-7 w-4/5'>We bring commerce to all stakeholders in the value chain, Making it more rewarding for everyone who can feel good about it.</p>
                </div>
                <div className='w-full lg:w-1/2 mx-5 pl-0 lg:pl-4'>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={retail} alt='' />
                        <h5 className='text-md text-black font-default font-medium'>Retail</h5>
                    </div>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={wholesale} alt='' />
                        <h5 className='text-md text-black font-default font-medium'>Wholesale</h5>
                    </div>
                    <div className='flex items-center box-hover w-full mt-5 justify-center gap-3 h-[182px] rounded-xl commerce-div-shadow'>
                        <img className='w-[70px]' src={global} alt='' />
                        <h5 className='text-md text-black font-default font-medium'>Global Supply</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommerceSection;