import "../home/index.css";
import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer";
import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (
 {
   tuit = {
   "_id": 234,
   "topic": "Space",
   "username": "SpaceX",
   "time": "2h",
   "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
   "image": "spacex.png",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "dislikes": 345,
   "disliked": false,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }
) => {
const dispatch = useDispatch();


const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}
const likeTuitHandler = (tuit) => {
  dispatch(updateTuitThunk({
      ...tuit,
      likes: tuit.likes + 1,
      liked: true
  }));
}
const unlikeTuitHandler = (tuit) => {
  dispatch(updateTuitThunk({
      ...tuit,
      likes: tuit.likes - 1,
      liked: false
  }));
}

const dislikeTuitHandler = (tuit) => {
  dispatch(updateTuitThunk({
      ...tuit,
      dislikes: tuit.dislikes + 1,
      disliked: true
  }));
}
const unDislikeTuitHandler = (tuit) => {
  dispatch(updateTuitThunk({
      ...tuit,
      dislikes: tuit.dislikes - 1,
      disliked: false
  }));
}

 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-auto">
            <img alt="" width={50} height={50} className="float-start rounded-circle" src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-10">
            <div>
                <span style={{ fontWeight: 'bold' }}>{tuit.username} <i class="bi bi-check-circle-fill" style={{color: "blue"}}></i></span>
                <span className="wd-gray"> {tuit.handle} · {tuit.time}</span>
                 <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <p className="wd-post-content">{tuit.tuit}</p>
            <div className="wd-icons wd-gray">
                <i class="bi bi-chat"></i><span className="ps-2 pe-5 me-2"> {tuit.replies}</span>
                <i class="bi bi-arrow-repeat"></i><span className="ps-2 pe-5 me-2"> {tuit.retuits}</span>
                {tuit.liked && <i onClick={() => unlikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger"></i>}
                {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart"></i>}
                <span className="ps-2 pe-5 me-2"> {tuit.likes}</span>
                {tuit.disliked && <i onClick={() => unDislikeTuitHandler(tuit)} className="bi bi-hand-thumbs-down-fill text-danger"></i>}
                {!tuit.disliked && <i onClick={() => dislikeTuitHandler(tuit)} className="bi bi-hand-thumbs-down"></i>}
                <span className="ps-2 pe-5 me-2"> {tuit.dislikes}</span>
                <i class="bi bi-share"></i>️<span className="ps-2 pe-5 me-2"></span>
            </div>
        </div>
    </div>
  </li>
 );
};
export default TuitItem;