import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import EditProfile from "../edit-profile";
import {Link} from "react-router-dom";

const ProfileComponent = () =>  {
    const profile = useSelector((state) => state.profile);

 return(
 <div className="border">
    <div className="row ms-2 mt-1">
          <div className="col-auto mt-2">
          <Link to="/tuiter/home" className="fw-bolder" style={{color:"black"}}>
                <h5><i className="bi bi-arrow-left fw-bolder"></i></h5>
            </Link>

          </div>
          <div className="col-10">
            <h5>{profile.firstName} {profile.lastName}</h5>
            <p className="mt-0 text-secondary"> {profile.tuits} tuits</p>
          </div>
    </div>
    <div className="position-relative mb-2">
        <img alt="" className="w-100" src={`/images/${profile.bannerPicture}`}/>
    </div>
    <div className="row">
        <div className="col-8 p-0 rounded-circle position-relative-up-left" style={{overflow:'hidden', height:'100px', width:'100px', zIndex:20}}>
            <img alt="" style={{objectFit: 'cover', height:'100px', width: '100px'}} className="" src={`/images/${profile.profilePicture}`}/>
        </div>
        <div className="col-4">
                    <Link to="/tuiter/edit-profile">
                        <button onClick={()=><EditProfile/>}
                            className="float-end me-3 btn btn-light rounded-pill border fw-bolder" style={{backgroundColor: "white"}}>
                            Edit Profile
                        </button>
                    </Link>
        </div>
    </div>
    <div className="ms-2 mt-3 position-relative-up-left">
        <p className="mb-0 fw-bolder">{profile.firstName} {profile.lastName}</p>
        <p className="text-secondary">{profile.handle}</p>
        <p>{profile.bio}</p>
        <div className="d-flex flex-row">
            <div className="me-4">
               <i class="bi bi-geo-alt"></i> {profile.location}
            </div>
            <div className="me-4">
                <i class="bi bi-balloon"></i> Born {profile.dateOfBirth}
            </div>
            <div className="me-4">
                <i class="bi bi-calendar2-week"></i> Joined {profile.dateJoined}
            </div>
        </div>
        <div className="d-flex flex-row mt-2">
            <div className="me-4"><span className="fw-bolder">{profile.followingCount}</span> Following </div>
            <div className="me-4"><span className="fw-bolder">{profile.followersCount}</span> Followers </div>
        </div>
    </div>

  </div>
 );
}
export default ProfileComponent;