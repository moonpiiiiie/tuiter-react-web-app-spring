import "../home/index.css";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, likeTuit, unlikeTuit} from "./tuits-reducer";


const TuitItem = (
 {
   tuit = {
   "_id": 234,
   "topic": "Space",
   "userName": "SpaceX",
   "time": "2h",
   "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
   "image": "spacex.png",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
const likeTuitHandler = (id) => {
  dispatch(likeTuit(id));
}
const unlikeTuitHandler = (id) => {
  dispatch(unlikeTuit(id));
}

 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-auto">
            <img alt="" width={50} height={50} className="float-start rounded-circle" src={`/tuiter/explore/${tuit.image}`}/>
        </div>
        <div className="col-10">
            <div>
                <span style={{ fontWeight: 'bold' }}>{tuit.userName} <i class="bi bi-check-circle-fill" style={{color: "blue"}}></i></span>
                <span className="wd-gray"> {tuit.handle} · {tuit.time}</span>
                 <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <p className="wd-post-content">{tuit.tuit}</p>
            <div className="wd-icons wd-gray">
                <i class="bi bi-chat"></i><span className="ps-2 pe-5 me-2"> {tuit.replies}</span>
                <i class="bi bi-arrow-repeat"></i><span className="ps-2 pe-5 me-2"> {tuit.retuits}</span>
                
                {tuit.liked && <i onClick={() => unlikeTuitHandler(tuit)} className="bi bi-heart-fill wd-red"></i>}
                {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart"></i>}
               
                ️<span className="ps-2 pe-5 me-2">️ {tuit.likes}</span>
                <i class="bi bi-share"></i>️<span className="ps-2 pe-5 me-2"></span>
            </div>
        </div>

    </div>
  </li>
 );
};
export default TuitItem;