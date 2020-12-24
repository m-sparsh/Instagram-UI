import React,{useState} from 'react';
import Suggestions from './Suggestions.js';

function Rightfixbar(){
    return(
    <div className="Rightbar">
        <div className="Rightbar-user">
          <div><img className="Rightbar-user-img" src="/images/profile_img.jpg" alt="profile image" /> </div>
          <div className="Rightbar-user-name">sparsh_119</div>
          <div className="Rightbar-button">Switch</div>
        </div>

        <Suggestions />
    </div>
    )
}

export default Rightfixbar;