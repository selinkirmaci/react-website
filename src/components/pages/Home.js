import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import NewHeroSection from '../NewHeroSection';

function Home () {
    return(
        <>
            <NewHeroSection/>
            <Cards/>
            <Footer/>
        </>

    )
}

export default Home;