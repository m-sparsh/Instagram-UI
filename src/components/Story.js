import React,{useState} from 'react';

function Story(){

   const [story,setStory]=useState([
    { id: 1, img: "/images/tanishq.jpeg", name: "tanishq16verma" },
    { id: 2, img: "/images/yash.jpeg", name: "_yash_.2209" },
    { id: 3, img: "/images/chetna.jpeg", name: "chetna_1001" },
    { id: 4, img: "/images/chirag.jpeg", name: "chirag_agarwal112" },
    { id: 5, img: "/images/utkarsh.jpeg", name: "_foxy_mister_" },
    { id: 6, img: "/images/shivam.jpeg", name: "shivamgupta1281" },
    { id: 7, img: "/images/anas.jpeg", name: "anwar.anas19" },
    { id: 8, img: "/images/shreya.jpeg", name: "the_shreya_maheshwari" },
   ])

    return(
        <div className="stories">
             {story.map((person) => (
                <div className="storyblock" key={person.id}>
                   <div className="storypic">
                       <span>
                       <img src={person.img} alt="user" />
                       </span>
                    </div>
                   <div className="storyname">{person.name}</div>
                </div>
             ))}
           
        </div>
    )
}

export default Story;