import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import image from '../../../assets/partnering.png'
// import './PartnerSection.css'

const PartnerSection = () => {
    const handleAnchor = () => {

    }
    return (
        <div className='bg-lightblue' id='partners'>
            <div className='main-container flex flex-col items-center gap-12 lg:flex-row pt-32 pb-32'>
                <div className='w-full lg:w-4/5 xl:w-1/2 flex justify-center max-w-[550px]'>
                    <img className='hover:scale-110 duration-700' src={image} alt='' />

                </div>
                <div className='w-full lg:w-3/5 xl:w-1/2 text-black font-default'>
                    <h2 className='section-header'>Partnering with us to digitize the Blue Food ecosystem</h2>
                    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        {/*  */}
                        <div className='p-7 bg-white rounded-[10px] text-blue test hover-blue-white-text ease-in duration-300'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScyNEotOo9IOcmHOZdDf6D29nzqANw6nyoiJi-aP0Qst-VeJQ/viewform' target='_blank'>
                                <h5 className='partners-div-texts text-2lg font-extrabold text'>Fisheries</h5>
                                <h5 className='partners-div-texts mt-5'><HiArrowRight size='29px' /></h5>
                            </a>
                        </div>
                        {/*  */}
                        <div className='p-7 bg-white rounded-[10px] text-blue test hover-blue-white-text ease-in duration-300'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScyNEotOo9IOcmHOZdDf6D29nzqANw6nyoiJi-aP0Qst-VeJQ/viewform' target='_blank'>
                            <h5 className='partners-div-texts text-2lg font-extrabold text'>Aquaculture</h5>
                            <h5 className='partners-div-texts mt-5'><HiArrowRight size='29px' /></h5>
                            </a>
                        </div>
                        {/*  */}
                        <div className='p-7 bg-white rounded-[10px] text-blue test hover-blue-white-text ease-in duration-300'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScyNEotOo9IOcmHOZdDf6D29nzqANw6nyoiJi-aP0Qst-VeJQ/viewform' target='_blank'>
                            <h5 className='partners-div-texts text-2lg font-extrabold text'>Processor</h5>
                            <h5 className='partners-div-texts mt-5'><HiArrowRight size='29px' /></h5>
                            </a>
                        </div>
                        {/*  */}
                        <div className='p-7 bg-white rounded-[10px] text-blue test hover-blue-white-text ease-in duration-300'>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScyNEotOo9IOcmHOZdDf6D29nzqANw6nyoiJi-aP0Qst-VeJQ/viewform' target='_blank'>
                            <h5 className='partners-div-texts text-2lg font-extrabold text'>Logistics</h5>
                            <h5 className='partners-div-texts mt-5'><HiArrowRight size='29px' /></h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;