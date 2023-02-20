import React from 'react';
import Footer from '../components/Footer/Footer';
import CommerceSection from '../components/landingPage/CommerceSection/CommerceSection';
import GoalSection from '../components/landingPage/GoalSection/GoalSection';
import HeroSection from '../components/landingPage/HeroSection/HeroSection';
import PartnerSection from '../components/landingPage/PartnerSection/PartnerSection';
import PressSection from '../components/landingPage/PressSection/PressSection';
import TalkSection from '../components/landingPage/TalkSection/TalkSection';
import WhySequaSection from '../components/landingPage/WhySequaSection/WhySequaSection';


import './Home.css'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <CommerceSection/>
            <GoalSection/>
            <WhySequaSection/>
            <PartnerSection/>
            <PressSection/>
            <TalkSection/>
            <Footer/>
        </div>
    );
};

export default Home;