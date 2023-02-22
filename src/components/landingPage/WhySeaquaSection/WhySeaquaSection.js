import React from 'react';
import buildingInvesment from '../../../assets/Building_investment_2_.png'
import logistics from '../../../assets/Logistics_hub_2_.png'
import machines from '../../../assets/machines.png'
import production from '../../../assets/production.png'

const WhySequaSection = () => {
    return (
        <div className='bg-white' id='solutions'>
            <div className='main-container pb-[120px] flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-1/2 mt-[120px]'>
                    <h2 className='text-black section-header'>Why Choose Seaqua for Your Blue Food Needs?</h2>
                    <p className='text-black font-default text-sm font-normal mt-7'>Choose Seaqua for sustainable, innovative, and high-quality Blue Food. Our state-of-the-art processing, seamless sourcing, and cutting-edge production methods are transforming the aquaculture industry, providing healthy and delicious products that are responsibly sourced.</p>
                    <div className='bg-lightgreen mt-[76px] p-7 rounded-[10px] box-hover'>
                        <h4 className='text-black font-default text-md font-bold'>Capital</h4>
                        <p className='text-black font-default text-sm font-normal mt-12'>At Seaqua, we believe in investing in innovative solutions and cutting-edge technologies to transform the aquaculture industry. Join us in creating a sustainable future for our oceans through responsible investments and financing.</p>
                        <div className='flex justify-end mt-12'>
                            <img className='w-[200px]' src={buildingInvesment} alt='' />
                        </div>
                    </div>
                    <div className='bg-lightblue mt-5 p-7 rounded-[10px] box-hover'>
                        <h4 className='text-black font-default text-md font-bold'>Sourcing & Logistics</h4>
                        <p className='text-black font-default text-sm font-normal mt-12'>At Seaqua, we pride ourselves on our seamless sourcing and logistics operations. Our global supply chain ensures that we can provide our customers with the freshest and highest-quality Blue Food products while reducing our environmental impact.</p>
                        <div className='flex justify-end mt-12'>
                            <img className='w-[200px]' src={logistics} alt='' />
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-1/2 mt-0 lg:mt-[140px]'>
                    <div className='bg-lightyellow p-7 rounded-[10px] box-hover'>
                        <h4 className='text-black font-default text-md font-bold'>Processing Factory</h4>
                        <p className='text-black font-default text-sm font-normal mt-12'>Our state-of-the-art processing factory ensures that our Blue Food is always fresh, sustainably sourced, and responsibly harvested. With a focus on quality and efficiency, we guarantee our customers the best possible Blue Food products.</p>
                        <div className='flex justify-end mt-12'>
                            <img className='w-[200px]' src={machines} alt='' />
                        </div>
                    </div>
                    <div className='bg-lightpink mt-5 p-7 rounded-[10px] box-hover'>
                        <h4 className='text-black font-default text-md font-bold'>Production</h4>
                        <p className='text-black font-default text-sm font-normal mt-12'>Our innovative aquaculture production methods and cutting-edge technology enable us to produce Blue Food that is healthy, sustainable, and delicious. Join us in our mission to transform the aquaculture industry and create a better future for our planet.</p>
                        <div className='flex justify-end mt-12'>
                            <img className='w-[200px]' src={production} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySequaSection;