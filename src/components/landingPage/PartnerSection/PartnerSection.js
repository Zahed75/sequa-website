import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import image from '../../../assets/partnering.png'
import image1 from '../../../assets/partnering-1.png'
import image2 from '../../../assets/partnaring-2.png'

const PartnerSection = () => {
    return (
        <div className='bg-lightblue'>
            <div className='main-container flex flex-col items-center gap-12 lg:flex-row pt-32 pb-32'>
                <div className='w-full lg:w-4/5 xl:w-1/2 flex justify-center max-w-[550px]'>
                    {/* <div className='pb-[230px] lg:pb-[350px] w-[458px]'>
                        <div className='w-[300px] xl:w-[385px]'><img className='mt-[165px]' src={image1} alt='' /></div>
                        <div className='w-[300px] xl:w-[385px]'><img className='mt-[-400px] xl:mt-[-520px] ml-[164px] mt-20 ' src={image2} alt='' /></div>
                    </div> */}
                    <img src={image} alt=''/>

                </div>
                <div className='w-full lg:w-3/5 xl:w-1/2'>
                    <h2 className='text-black text-xl font-default font-extrabold leading-tight'>Partnering with us to digitize the Blue Food ecosystem</h2>
                    <p className='text-black text-sm font-default font-normal mt-7 leading-tight '>We leverage technology to scale the Bangladesh Ocean Fisheries and Marine Aquaculture Industries and make them more rewarding for all of its stakeholders, including Fishermen, Harvesters, Factories, and Consumers.</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScyNEotOo9IOcmHOZdDf6D29nzqANw6nyoiJi-aP0Qst-VeJQ/viewform' target='_blank' className='button button-fill-blue w-fit flex items-center gap-[17px] mt-7'>Join Us <MdOutlineArrowForwardIos size='20px'/></a>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;