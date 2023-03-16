import React from "react";
import {useSelector} from "react-redux";
import {useState} from "react";
import {Link} from "react-router-dom";

const EditProfileComponent = () =>  {
    const profile = useSelector((state) => state.profile);
    const name = profile.firstName + " " + profile.lastName;
    console.log(name);
 return(
 <div className="border">
    <div className="row ms-2 mt-1">
          <div className="col-auto">
            <Link to="/tuiter/profile" className="fw-bolder" style={{color:"black"}}>
                <h5><i className="bi bi-x"></i></h5>
            </Link>
          </div>
          <div className="col-10">
            <div className="row">
                <div className="col-8"><h5>Edit profile</h5></div>
                <div className="col-4"><button className="btn float-end btn-light rounded-pill border fw-bolder" style={{fontSize:10}}>Save</button></div>    
            </div>
          </div>
    </div>
    <div className="position-relative mb-2">
        <img alt="" className="w-100" src={`/images/${profile.bannerPicture}`}/>
    </div>
    <div className="row">
        <div className="col-8">
            <img alt="" width={100} height={100} className="rounded-circle position-relative-up-left" src={`/images/${profile.profilePicture}`}/>
        </div>
        <div className="col-4">

        </div>
    </div>
    <div className="ms-2 me-2">
      
        <label for="name" className="fw-bolder"> Name </label><br/>
        <input id="name" className="mb-2 form-control" value={name}/> <br/>
    
        
        <label for="bio" className="fw-bolder"> Bio </label><br/>
        <textarea id="bio" className="mb-2 form-control" value={profile.bio} rows="3" cols="50"/> <br/>
        <label for="location" className="fw-bolder"> Location </label><br/>
        <input id="location"  className="mb-2 form-control" value={profile.location}/> <br/>
        <label for="url" className="fw-bolder"> URL </label><br/>
        <input id="url"  className="mb-2 form-control" value={profile.website}/> <br/>
        <label for="birthday" className="fw-bolder"> Birthday </label><br/>
        <input id="birthday"  className="mb-2 form-control" value={profile.dateOfBirth}/> <br/>
    </div>

  </div>
 );
}
export default EditProfileComponent;