import React from 'react';

const TalkSection = () => {
    return (
        <div className='bg-lightblue'>
            <div className='main-container py-[120px]'>
                <h2 className='text-black section-header text-center'>Let’s Talk</h2>
                <div className='flex justify-center pt-2.5'>
                    <p className='text-black font-default font-normal text-sm text-center w-full lg:w-2/3 xl:w-1/2'>Have a question, comment, or inquiry? We would love to hear from you! Please feel free to contact us</p>
                </div>
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-x-5 gap-y-9'>
                    {/* name */}
                    <div>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='name-field'>Your Name*</label>
                        <input required type="text"  placeholder="Ex. Md Abdullah" className=" talk-input-field text-black font-default text-[14px] font-normal w-full" id='name-field'/>
                    </div>
                    {/* company */}
                    <div>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='company-field'>Company</label>
                        <input type="text"  placeholder="Ex. ABC Venture" className=" talk-input-field text-black font-default text-[14px] font-normal w-full" id='company-field'/>
                    </div>
                    {/* email */}
                    <div>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='email-field'>Your Email</label>
                        <input type="text"  placeholder="example@example.com" className=" talk-input-field text-black font-default text-[14px] font-normal w-full" id='email-field'/>
                    </div>
                    {/* number */}
                    <div>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='number-field'>Contact Number</label>
                        <input type="text"  placeholder="01XXXXXXXXX" className=" talk-input-field text-black font-default text-[14px] font-normal w-full" id='number-field'/>
                    </div>
                    {/* subject */}
                    <div className='sm:col-span-2'>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='subject-field'>Contact Number</label>
                        <input type="text"  placeholder="Ex. General Inquiry" className=" talk-input-field text-black font-default text-[14px] font-normal w-full" id='subject-field'/>
                    </div>
                    {/* message */}
                    <div className='sm:col-span-2 row-span-2'>
                        <label className='block text-xs font-default text-black pb-0.5 font-normal' htmlFor='message-field'>Your Message*</label>
                        <textarea type="text"  placeholder="Your Message..." className="resize-none talk-input-field text-black font-default font-xs font-normal w-full h-full" id='message-field'/>
                    </div>
                    <div className='flex justify-end sm:col-span-2'>
                        <button className='button button-fill-blue mt-8'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalkSection;