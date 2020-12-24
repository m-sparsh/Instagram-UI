import React,{useState} from 'react';

function Suggestions(){

const [suggest] = useState([
    { id: 1, profileimg: "/images/tanishq.jpeg", name: "tanishq16verma" },
    { id: 2, profileimg: "/images/chirag.jpeg", name: "chirag_agarwal112" },
    { id: 3, profileimg: "/images/shivam.jpeg", name: "shivamgupta1281" },
    { id: 4, profileimg: "/images/anas.jpeg", name: "anwar.anas19" },
    { id: 2, profileimg: "/images/yash.jpeg", name: "_yash_.2209" },
])

   return(
       <>
       <div className="suggestion">
         <div className="sugg-head">Suggestions for you</div>
         <div className="sugg-see-all">See All</div>
       </div>

       <div className="sug-info">
       {suggest.map((profile) => (
         <div className="Rightbar-user">
            <div><img className="sug-user-img" src={profile.profileimg} alt="profile image" /> </div>
            <div className="Rightbar-user-name">{profile.name}</div>
            <div className="Rightbar-button">Follow</div>
         </div>


       ))}

       <ul className="sug-ul">
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Job</li>
        <li>Privacy</li>
        <li>Terms</li>
       </ul>
       <div className="copyright">© 2020 INSTAGRAM FROM FACEBOOK </div>
           
       </div>
       </>
   )
}

export default Suggestions;