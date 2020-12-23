import React from 'react';
import {FaSistrix} from 'react-icons/fa'
import {AiFillHome,AiOutlineMessage,AiOutlineHeart} from 'react-icons/ai'
import {ImCompass2} from 'react-icons/im'


function Navbar(){
    return(
        <div className="navbar">
              <div className="navlogo">
              <img src="/Images/instagram.png" alt="Instagram Logo" />
              </div>
              
              <div className="navsearchbox">
              <FaSistrix className="searchicon" />
              <input type="text" className="navsearchbox-design" placeholder="Search" />
              </div>
              
              <div className="navprofile">
              
              <AiFillHome size="1.375rem" className="navprofileicons" />
              <AiOutlineMessage size="1.375rem" className="navprofileicons" />
              <ImCompass2 size="1.375rem" className="navprofileicons" />
              <AiOutlineHeart size="1.375rem" className="navprofileicons" />
              
              <img src="/Images/profile_img.jpg" className="navprofileimg" />
              </div>
        </div>
    )
}

export default Navbar;