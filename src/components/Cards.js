import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out some of the most liked</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                    <CardItem src="images/oil-painting/img7.jpg" text="Masked Hero - replica" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img8.jpg" text="Haters will say fictional" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img14.jpg" text="Look at my Soul" path='/services' label='Adventure'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem src="images/oil-painting/img1.png" text="The Door" path='/services'/>
                    <CardItem src="images/oil-painting/img2.jpg" text="Stay High" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img19.jpg" text="Don't Let Me See" path='/services' label='Adventure'/>

                </ul>
            
                <ul className='cards__items'>
                    <CardItem src="images/oil-painting/img18.jpg" text="Starry Night - replica" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img16.jpg" text="When Energy turn into Synergy" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img17.jpg" text="Spritual Enlightment for my Table" path='/services' label='Adventure'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem src="images/oil-painting/img15.png" text="Same Heart Different Places" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img20.jpg" text="Innocance is Overrated" path='/services' label='Adventure'/>
                    <CardItem src="images/oil-painting/img21.png" text="Gift To My Father" path='/services' label='Adventure'/>

                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Cards