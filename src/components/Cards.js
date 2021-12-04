import React from 'react';
import CardItem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Web Designs</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="Images/image-9.jpg"
                        text="Explore 1000+ website design ideas all around the world."
                        label='Web Designing'
                        path="/services"
                        />
                        <CardItem 
                        src="Images/image-8.jpg"
                        text="Find out different products provided by us."
                        label='Products'
                        path="/services"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="jaimin0609/reactwebsite/tree/main/public/Images/image-5.jpg"
                        text="Better, Faster, Together."
                        label='Web Designing'
                        path="/services"
                        />

                        <CardItem 
                        src="Images/image-4.jpg"
                        text="Providing business insights."
                        label='Products'
                        path="/services"
                        />

                        <CardItem 
                        src="Images/image-7.jpg"
                        text="We respect your privacy."
                        label='Privacy Policy'
                        path="/services"
                        />

                        <CardItem 
                        src="Images/image-6.jpg"
                        text="Consistently Updates."
                        label='Updates'
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
