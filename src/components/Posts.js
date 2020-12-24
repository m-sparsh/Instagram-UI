import React, {useState} from 'react';

function Posts(){

const [post,setpost] = useState([
    { id: 1, profileimg: "/images/tanishq.jpeg", postimg: "/images/tanishq.jpeg", name: "tanishq16verma" },
    { id: 2, profileimg: "/images/chirag.jpeg", postimg: "/images/chirag.jpeg", name: "chirag_agarwal112" },
    { id: 3, profileimg: "/images/shivam.jpeg", postimg: "/images/shivam.jpeg", name: "shivamgupta1281" },
    { id: 4, profileimg: "/images/anas.jpeg", postimg: "/images/anas.jpeg", name: "anwar.anas19" },
])

    return(
        <>{post.map((post) => (
          <div className="posts">
          <div className="posts-top">
              <img className="posts-top-img" src={post.profileimg} alt="Image" />
              <div className="posts-top-name">{post.name}</div>
              <div className="posts-top-dots">...</div>
          </div>
          <div className="posts-middle">
             <img src={post.postimg} alt="Image" />
          </div>
        </div>
      ))}
        </>
    )
}

export default Posts;