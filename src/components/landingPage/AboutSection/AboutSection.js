import React from 'react';
import wholeX from '../../../assets/WholeX-image.png'
import globalX from '../../../assets/GlobalX-image.png'
import processX from '../../../assets/ProcessX-image.png'
import WhiteNavbar from '../../WhiteNavbar/WhiteNavbar';

const changeButtonTextBgGreen = (id) => {
    const btn = document.getElementById(id)
    btn.innerText = 'Coming soon'
    btn.classList.remove('bg-blue')
    btn.classList.add('bg-green')
    btn.classList.remove('green-outline-hover')
    btn.classList.add('blue-outline-hover')
}
const changeButtonTextBgBlue = (id, text) => {
    const btn = document.getElementById(id)
    btn.innerText = text;
    btn.classList.add('bg-blue')
    btn.classList.remove('bg-green')
    btn.classList.remove('blue-outline-hover')
    btn.classList.add('green-outline-hover')
}
const AboutSection = () => {
    const hideResources = () => {
        const dropdown = document.getElementById('resources-dropdown-white')
        dropdown.classList.add('hidden')
    }
    return (
        <div className='bg-white  overflow-hidden' id='about' onDoubleClick={() => hideResources()}>
            <WhiteNavbar />
            <div className='main-container pt-24 pb-32 flex flex-col items-center font-default text-black text-center'>
                <h3 className='w-full flex flex-col section-header'>Making sense of global<span>Blue Food supply chain</span></h3>
                <p className='w-full sm:w-4/5 md:w-2/3 lg:w-2/5 font-normal mt-7'>Strong and reliable fisheries - aquaculture network offering consistent and quality supply</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-12 gap-5'>
                    {/*  */}
                    <div className='max-w-[413px] box-hover'>
                        <h5 className='text-2lg py-2.5 font-bold bg-lightblue2 w-full rounded-[10px]'>Whole-X</h5>
                        <div className='p-10 m-2.5 flex flex-col items-center gap-7 shadow-md rounded-b-[10px]'>
                            <img src={wholeX} className='h-[90px]' alt='' />
                            <p className='font-normal text-gray'>Buy all kinds of sustainable seafood and aquatic food for your hotel, restaurant, café, and beyond.</p>
                            <button className='button button-fill-blue w-full green-outline-hover' id='whole-x-btn' onMouseEnter={() => changeButtonTextBgGreen('whole-x-btn')} onMouseLeave={() => changeButtonTextBgBlue('whole-x-btn', 'Start buying')}>Start buying</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='max-w-[413px] box-hover'>
                        <h5 className='text-2lg py-2.5 font-bold bg-lightsky w-full rounded-[10px]'>Process-X</h5>
                        <div className='p-10 m-2.5 flex flex-col items-center gap-7 shadow-md rounded-b-[10px]'>
                            <img src={processX} className='h-[90px]' alt='' />
                            <p className='font-normal text-gray'>Begin smoothly sourcing your fish and marine edible foods. Optimize your factory operations.</p>
                            <button className='button button-fill-blue w-full green-outline-hover' id='process-x-btn' onMouseEnter={() => changeButtonTextBgGreen('process-x-btn')} onMouseLeave={() => changeButtonTextBgBlue('process-x-btn', 'Digitize your sourcing')}>Digitize your sourcing</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='max-w-[413px] box-hover'>
                        <h5 className='text-2lg py-2.5 font-bold bg-lightpink2 w-full rounded-[10px]'>Global-X</h5>
                        <div className='p-10 m-2.5 flex flex-col items-center gap-7 shadow-md rounded-b-[10px]'>
                            <img src={globalX} className='h-[90px]' alt='' />
                            <p className='font-normal text-gray'>Source your seafood from Bangladesh directly from our fisheries and aquaculture firm.</p>
                            <button className='button button-fill-blue w-full green-outline-hover' id='global-x-btn' onMouseEnter={() => changeButtonTextBgGreen('global-x-btn')} onMouseLeave={() => changeButtonTextBgBlue('global-x-btn', 'Send REQ')}>Send RFQ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;