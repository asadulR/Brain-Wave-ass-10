import React from 'react';
import Header from '../Header/Header';
import TopSlider from '../TopSlider/TopSlider';
import Services from './Services/Services';

const Home = () => {
    return (
        <main>
            <Header/>
            <TopSlider/>
            <Services/>
        </main>
    );
};

export default Home;