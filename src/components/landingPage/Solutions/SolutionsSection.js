import React from 'react';
import buildingInvesment from '../../../assets/Building_investment_2_.png'
import catchFish from '../../../assets/catch-fish.png'
import logistic from '../../../assets/Logistics_hub_2_.png'
import managing from '../../../assets/managing.png'

const Solutions = () => {
    return (
        <div className='bg-white' id='solutions'>
            <div className='main-container py-[120px] font-default'>
                <div className='flex flex-col lg:flex-row gap-7'>
                    <h2 className='text-black section-header w-full lg:w-1/2'>World-class technology where it is needed</h2>
                    <p className='text-gray text-sm font-normal w-full lg:w-1/2'>We leverage technology to scale Bangladesh's fisheries and aquaculture industries and make them more rewarding for all of its stakeholders, including fishermen, harvesters, factories, and consumers.</p>
                </div>
                <div className='mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-7'>
                    {/*  */}
                    <div className='bg-lightgreen px-12 py-16 rounded-[10px] gap-7 flex flex-col lg:flex-row box-hover text-black items-center justify-between'>
                        <div className=''>
                            <img className='w-[200px]' src={buildingInvesment} alt='' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h4 className='text-md font-bold'>Capital and investment</h4>
                            <p className=' text-gray text-sm font-normal mt-5'>Our financing mechanisms can help Blue Food producers obtain financing and offer everyone alternative asset-class investment opportunities.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='bg-lightblue px-12 py-16 rounded-[10px] gap-7 flex flex-col lg:flex-row box-hover text-black items-center justify-between'>
                        <div className=''>
                            <img className='w-[200px]' src={catchFish} alt='' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h4 className='text-md font-bold'>Catch and harvest</h4>
                            <p className=' text-gray text-sm font-normal mt-5'>Our producer framework and equitable management approach boost fisheries and aquaculture resilience.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='bg-lightyellow px-12 py-16 rounded-[10px] gap-7 flex flex-col lg:flex-row box-hover text-black items-center justify-between'>
                        <div className=''>
                            <img className='w-[200px]' src={logistic} alt='' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h4 className='text-md font-bold'>Sourcing and logistics</h4>
                            <p className=' text-gray text-sm font-normal mt-5'>We digitize the supply chain to enable small-scale fisheries and aquaculture enterprises to sell more with fewer resources.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='bg-lightpink px-12 py-16 rounded-[10px] gap-7 flex flex-col lg:flex-row box-hover text-black items-center justify-between'>
                        <div className=''>
                            <img className='w-[200px]' src={managing} alt='' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h4 className='text-md font-bold'>Traceability</h4>
                            <p className=' text-gray text-sm font-normal mt-5'>Our digital ecosystem makes sure that Blue Food products that can be traced can reach everyone in the world.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Solutions;