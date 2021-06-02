import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className='header'>
            <img 
            className="header_icon"
            src="./Airbnb-logo.jpg"
            alt=""
            />
            
            <div className='header_center'>
                <input type="text"/>
               
            </div>    
                
                <div clasName= 'header_right'>
                    <p>Become a host</p>
                 <LanguageIcon/>
                 <SearchIcon/>
                 <ExpandMoreIcon/>
                 <PersonIcon/>

                </div>

            
        </div>
        
    )
}

export default Header


