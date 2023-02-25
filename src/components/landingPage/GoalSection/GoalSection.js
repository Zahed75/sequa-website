import React from 'react';
import SDG1 from '../../../assets/SDG1.png'
import SDG2 from '../../../assets/SDG2.png'
import SDG3 from '../../../assets/SDG3.png'
import SDG12 from '../../../assets/SDG12.png'
import SDG13 from '../../../assets/SDG13.png'
import SDG14 from '../../../assets/SDG14.png'

const GoalSection = () => {
    return (
        <div className='bg-[#001021]' id='goals'>
            <div className='main-container pb-[120px] flex flex-col items-center font-default'>
                <h2 className='section-header w-full lg:w-2/3 text-center text-white mt-32'>Building a more sustainable Blue Food ecosystem for the world</h2>
                <p className='text-sm w-full lg:w-2/3 text-center font-normal text-white mt-7 leading-tight'>We enable finance to fisheries and marine aquaculture and leverage technology to streamline the global Blue food ecosystem powered by phygital distribution. At Seaqua, we bring solutions that are strategic in approach, innovative by design, and collaborative in nature to end overfishing without ending fishing.</p>
                <div className='mt-16 flex gap-5 flex-wrap justify-center'>
                    <div className='box-hover'>
                        <img src={SDG1} className='w-[122.13px]' alt=''/>
                    </div>
                    <div className='box-hover'>
                        <img src={SDG2} className='w-[122.13px]' alt=''/>
                    </div>
                    <div className='box-hover'>
                        <img src={SDG3} className='w-[122.13px]' alt=''/>
                    </div>
                    <div className='box-hover'>
                        <img src={SDG12} className='w-[122.13px]' alt=''/>
                    </div>
                    <div className='box-hover'>
                        <img src={SDG13} className='w-[122.13px]' alt=''/>
                    </div>
                    <div className='box-hover'>
                        <img src={SDG14} className='w-[122.13px]' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalSection;