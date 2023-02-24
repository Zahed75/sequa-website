import React from 'react';
import Footer from '../components/Footer/Footer';
import CommerceSection from '../components/landingPage/CommerceSection/CommerceSection';
import GoalSection from '../components/landingPage/GoalSection/GoalSection';
import HeroSection from '../components/landingPage/HeroSection/HeroSection';
import PartnerSection from '../components/landingPage/PartnerSection/PartnerSection';
import PressSection from '../components/landingPage/PressSection/PressSection';
import TalkSection from '../components/landingPage/TalkSection/TalkSection';
import WhySeaquaSection from '../components/landingPage/WhySeaquaSection/WhySeaquaSection';


import './Home.css'

const Home = () => {
    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 700){
            
            document.getElementById('white-navbar').classList.remove('top-[-800px]')
            document.getElementById('white-navbar').classList.add('top-0')
        }
        else if (window.pageYOffset < 700){
            document.getElementById('white-navbar').classList.remove('top-0')
            document.getElementById('white-navbar').classList.add('top-[-800px]')
        }
    })
    return (
        <div>
            <HeroSection/>
            <CommerceSection/>
            <GoalSection/>
            <WhySeaquaSection/>
            <PartnerSection/>
            <PressSection/>
            <TalkSection/>
            <Footer/>
        </div>
    );
};

export default Home;