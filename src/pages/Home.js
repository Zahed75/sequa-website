import React from 'react';
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/landingPage/AboutSection/AboutSection';
import GoalSection from '../components/landingPage/GoalSection/GoalSection';
import HeroSection from '../components/landingPage/HeroSection/HeroSection';
import PartnerSection from '../components/landingPage/PartnerSection/PartnerSection';
import PressSection from '../components/landingPage/PressSection/PressSection';
import Solutions from '../components/landingPage/Solutions/SolutionsSection';
import TalkSection from '../components/landingPage/TalkSection/TalkSection';


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
            <AboutSection/>
            <GoalSection/>
            <Solutions/>
            <PartnerSection/>
            <PressSection/>
            <TalkSection/>
            <Footer/>
        </div>
    );
};

export default Home;