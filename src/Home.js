import './Home.css'
import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
                className='home__image'
                src="https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg"
                alt=""
            />

            <div className='home__row'>
                <Product 
                  id='1'
                  title='The lean startup'
                  price={29.99}
                  image='https://m.media-amazon.com/images/I/81yrGRzMdeL._AC_UL320_.jpg' 
                  rating={5}
                />
                <Product
                  id='2' 
                  title='Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat'
                  price={20.38}
                  image='https://m.media-amazon.com/images/I/71-P2+J2RQL._AC_SY200_.jpg'
                  rating={4} />
            </div>

            <div className='home__row'>
                <Product
                id='3' 
                title='OutdoorMaster OTG Ski Goggles - Over Glasses Ski/Snowboard Goggles for Men, Women & Youth - 100% UV Protection'
                price={27.99}
                image='https://m.media-amazon.com/images/I/71JJ1ow-GHL._AC_SL1500_.jpg' 
                rating={4}
                />
                <Product
                id='4'
                title='XVX S-K80 75% Keyboard with Color OLED Display Mechanical Gaming Keyboard, Hot Swappable Keyboard'
                price={72.99}
                image='https://m.media-amazon.com/images/I/61Dl2Yz78BL._AC_UY218_.jpg' 
                rating={5}
                />
                <Product
                id='5' 
                title='Motorola Moto G Stylus | 2022 | 2-Day Battery | Unlocked | Made for US 4/128GB | 50MP Camera | Twilight Blue'
                price={127.00}
                image='https://m.media-amazon.com/images/I/51D14DGf5eL._AC_SL1390_.jpg'
                rating={4}
                />
            </div>

            <div className='home__row'>
                <Product
                id='6' 
                title='LG UltraGear QHD 34-Inch Curved Gaming Monitor 34GP83A-B, Nano IPS 1ms (GtG) with VESA DisplayHDR 400, NVIDIA G-SYNC, and AMD FreeSync Premium, 144Hz, Black'
                price={546.99}
                image='https://m.media-amazon.com/images/I/71UnbkzLquL._AC_SL1500_.jpg'
                rating={4}
                 />
            </div>
        </div>
    </div>
  )
}

export default Home