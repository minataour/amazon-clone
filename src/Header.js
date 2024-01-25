import React from 'react'
import './Header.css'
import SearchIcons from "@material-ui/icons/Search"
import ShoppingBasketIcons from "@material-ui/icons/ShoppingBasket"

function Header() {
  return (
    <div className='header'>
        <img 
            className='header__logo'
            src='.\assets\amazon_PNG11.png' 
        />

        <div className="header__search">
            <input 
            className="header__searchInput"
            type="text" />
            <SearchIcons 
            className="header__searchIcon" />
        </div>

        <div className="header__nav" >
            <div className="header__option" >
                <span className="header__optionLineOne" >Hello Son</span>
                <span 
                className="header__optionLineTwo" >Sign In</span>
            </div>
            
            <div className="header__option" >
                <span className="header__optionLineOne" >Return</span>
                <span 
                className="header__optionLineTwo" >& Orders</span>
            </div>

            <div className="header__option" >
                <span className="header__optionLineOne" >Your</span>
                <span 
                className="header__optionLineTwo" >Prime</span>
            </div>


            <div className='header__optionBasket'>
                <ShoppingBasketIcons />
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>

        </div>
    </div>
  )
}

export default Header