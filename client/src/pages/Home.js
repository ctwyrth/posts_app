import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
   const [ listOfPosts, setListOfPosts ] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3001/posts')
         .then((response) => {
            setListOfPosts(response.data);
         });
   }, []);

   return (
      <div className="postView">
         { listOfPosts.map((post) => {
            return (
               <div className="post" key={post.id}>
                  <div className="title">{post.title}</div>
                  <div className="body">{post.postText}</div>
                  <div className="footer">{post.username}</div>
               </div>
            )
         })}
      </div>
   )
}

export default Home