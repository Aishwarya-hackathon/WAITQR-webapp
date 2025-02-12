import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import bgvideo from "./videos/video-4.mp4";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted> 
                <source src={bgvideo} type="video/mp4" />
            </video>
            <h1>.. Taste something new ..</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    PLACE ORDER
                </Button> 
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                     Get to Know us <i className='far fa-smile'/>
                </Button>   
            </div>           
        </div>
    );
}

export default HeroSection;
