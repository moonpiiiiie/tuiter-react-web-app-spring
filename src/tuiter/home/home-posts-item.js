import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
const HomePostItem = (
 {
   homepost = {
    "avatarIcon": "elonmusk.jpg",
    "userName": "Elon Musk",
    "handleName": "@elonmusk",
    "time": "23h",
    "tuitContent": "Amazing show about <a href=\"#\">@Inspiration4x</a> mission!",
    "tuitImage": "../images/inspiration4.jpg",
    "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "cardText": "From training to launch to landing, this all-access ducuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    "cardLink":"<a class=\"wd-noLinkDecor\" href=\"netflix.com\">netflix.com</a>",
    "comment": "4.2k",
    "retuit": "3.5k",
    "like": "37.5k"
   }
 }
) => {
 return(
 <li className="list-group-item">
    <div>
    {homepost.topRetweet ?
        <div className="wd-gray">
            <i class="bi bi-arrow-repeat"></i>
            <span className="ms-2">{homepost.topRetweet}</span>
        </div> : ''
    }
    </div>
    <div class="d-flex w-100">

        <div className="me-2">
            <img width={48}  className="float-start rounded-circle" src={`/tuiter/images/${homepost.avatarIcon}`}/>
        </div>
        <div>
            <div>
                <span>{homepost.userName} <i class="bi bi-check-circle-fill" style={{color: "blue"}}></i></span>
                <span className="wd-gray"> {homepost.handleName} · {homepost.time}</span>
                <span className="wd-dots-gray"><i class="bi bi-three-dots"></i></span>
            </div>
            <p className="wd-post-content">{homepost.tuitContent} -> <Link to="#" className="text-decoration-none ms-1">{homepost.tuitLink}</Link></p>
            <div className="wd-post-description">
                <div className="wd-post-img-container">
                    <img className="wd-post-img" src={`/tuiter/images/${homepost.tuitImage}`}/>
                </div>
                {homepost.cardTitle ?
                     <div className="wd-post-content-container">
                         <span className="wd-post-title">{homepost.cardTitle}</span>
                         <p className="wd-post-des">{homepost.cardText}</p>
                     </div> : ''
                  }
            </div>
            <div className="wd-icons wd-gray">
                <span className="pe-5 me-2"><i class="bi bi-chat-left-dots"></i> {homepost.comment}</span>
                <span className="pe-5 me-2"><i class="bi bi-arrow-repeat"></i> {homepost.retuit}</span>
                <span className="pe-5 me-2">️<i class="bi bi-heart"></i>️ {homepost.like}</span>
                <span className="pe-5 me-2"><i class="bi bi-arrow-bar-up"></i>️</span>
            </div>
            {homepost.showThread==="true" ?
                <Link to="#" className="text-decoration-none ms-1">Show thread</Link> : ''
            }
        </div>

    </div>
 </li>
 );
};

export default HomePostItem;