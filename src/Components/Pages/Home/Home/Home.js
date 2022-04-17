import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import Intro from './Intro/Intro';
import Services from './Services/Services';

const Home = () => {
    return (
        <main>
            <TopSlider/>
            <Intro/>
            <Services/>
        </main>
    );
};

export default Home;