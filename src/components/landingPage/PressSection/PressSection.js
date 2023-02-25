import React from 'react';
import './PressSection.css'

const PressSection = () => {
    return (
        <div className='bg-white' id='press-room'>
            <div className='main-container px-5 lg:px-20 py-[120px] font-default'>
                <h3 className='text-black section-header text-center'>Press Room</h3>
                <div className='pt-11 flex gap-5 flex-wrap justify-center press-container text-white'>
                    {/* press-1 */}
                    <div className='box-hover '>
                        <div className='press rounded-[15px] flex flex-col justify-end press-1-img p-7 text-lg'>
                            <h3 className='press-text pb-4 font-bold'>Seaqua driving the Bangladesh Blue Revolution</h3>
                            <div>
                                <button className='button button-outline-white'>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* press-2 */}
                    <div className='box-hover '>
                        <div className='press rounded-[15px] flex flex-col justify-end press-2-img p-7'>
                            <h3 className='text-lg press-text pb-4 font-bold'>Bangladesh can lead the global 138B Blue Food Industry</h3>
                            <div>
                                <button className='button button-outline-white'>Read More</button>
                            </div>
                        </div>
                    </div>
                    {/* press-3 */}
                    <div className='box-hover '>
                        <div className='press rounded-[15px] flex flex-col justify-end press-3-img p-7'>
                            <h3 className='text-lg press-text pb-4 font-bold'>Shrimp Export from Bangladesh jump to 1B USD</h3>
                            <div>
                                <button className='button button-outline-white'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressSection;