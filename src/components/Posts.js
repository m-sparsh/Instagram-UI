import React, {useState} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiHeart} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa';
import {IoPaperPlaneOutline} from 'react-icons/io5';


function Posts(){

const [post,setpost] = useState([
    { id: 1, profileimg: "/images/tanishq.jpeg", postimg: "/images/tanishq.jpeg", name: "tanishq16verma" },
    { id: 2, profileimg: "/images/chirag.jpeg", postimg: "/images/chirag.jpeg", name: "chirag_agarwal112" },
    { id: 3, profileimg: "/images/shivam.jpeg", postimg: "/images/shivam.jpeg", name: "shivamgupta1281" },
    { id: 4, profileimg: "/images/anas.jpeg", postimg: "/images/anas.jpeg", name: "anwar.anas19" },
])

const rand1= Math.floor(Math.random() * 200);
const rand2= Math.floor(Math.random() * 200);

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
          
          <div className="posts-bottom">
            <div className="posts-buttons">
                <AiOutlineHeart size="1.7rem" className="postlikebutton" />
                <FaRegComment size="1.7rem" className="postlikebutton" />
                <IoPaperPlaneOutline size="1.7rem" className="postlikebutton" />
            </div>
            <div className="posts-likedby">
                <img className="posts-likedby-img" src="/images/likedby.jpg" alt="Image" />
                <div className="posts-top-name">Liked by <b>Lorum Ipsum</b> and <b>{rand1} others</b></div>
            </div>
            
            <div className="posts-caption">
               <b>{post.name}</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
           
            <div className="viewcomments">
              View all {rand2} comments
            </div>
            
            <div className="eg-comments-box">
                 <div className="eg-comments">
                         <div><b>xyz_231</b>  laboris nisi </div>
                         <div className="eg-comments-like"><FiHeart /></div>
                 </div>
                 
                 <div className="eg-comments">
                         <div><b>_iam_mahvish</b>  Excepteur sint occaecat </div>
                         <div className="eg-comments-like"><FiHeart /></div>
                 </div>
            </div>
            
            <div className="comment">
              <div className="add-comment"> Add a comment...</div>
              <div className="comment-post">Post</div>
            </div>
             

          </div>
        </div>
      ))}
        </>
    )
}

export default Posts;