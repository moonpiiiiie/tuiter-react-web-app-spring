import React from "react";
import homePosts from "./home-posts.json";
import HomePostItem from "./home-posts-item";

const HomePostList = () => {
    return (
   <ul className="list-group">
     {
       homePosts.map(post =>
         <HomePostItem
           key={post._id} homepost={post}/> )
     }
   </ul>
    );
};
export default HomePostList;