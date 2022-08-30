import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './NewHeroSection.css';
import Slideshow from './Slideshow';

function NewHeroSection() {

    const [card,setCard] = useState(false);

    const showCard = () => {
    if (window.innerWidth <= 1200) {
        setCard(false);
    } else {
        setCard(true);
    }
    };

    useEffect(() => {
        showCard();
    }, []);

    window.addEventListener('resize', showCard);

  return (
    <div className='big-container'>
        <div className='left-container'>
            <h1 className='title2'>HELLO ART LOVER!</h1>
            <h1 className='title2'>Welcome To My Art Gallery</h1>

        </div>
        <div className='right-container'>
            <div className='photo-container'>
                <Slideshow startingIndex ={0}/>
            </div>
            {card &&
                <div className='photo-container'>
                    <Slideshow startingIndex ={2}/>
                </div>
            }
        </div>
    </div>
  );
}

export default NewHeroSection;