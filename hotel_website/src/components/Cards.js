import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img_9 from './images/img-9.jpg';
import img_10 from './images/img-10.jpg';
import pasta from './images/Pasta.jpg';
import pc from './images/Papaya_curry.jpg';

function Cards() {
    return (
        <div className='cards'>
           <h1>Check out these TEMPTING dishes!</h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={img_9}
                        text="Szechuan Tofu and Veggies"
                        label='Lunch'
                        path='/Menu'></CardItem> 
                        <CardItem
                        src={img_10}
                        text="Pancakes"
                        label='breakfast'
                        path='/Menu'></CardItem>
                        <CardItem
                        src={pasta}
                        text="Pasta"
                        label='Breakfast/Lunch'
                        path='/Menu'></CardItem> 
                        <CardItem
                        src={pc}
                        text="Papaya Curry"
                        label='lunch/dinner'
                        path='/Menu'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
 