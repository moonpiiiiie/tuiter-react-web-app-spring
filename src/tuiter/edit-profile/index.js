import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Link} from "react-router-dom";
import {updateProfile} from "../reducers/profile-reducer";


const EditProfileComponent = () =>  {
    const user = useSelector(state => state.profile)[0];
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const onSave = () => {
        dispatch(updateProfile(profile));
    }
  
    
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
                <div className="col-4">
                    <Link to="/tuiter/profile"><button onClick={onSave} className="btn float-end btn-light rounded-pill border fw-bolder" style={{fontSize:10}}>Save</button></Link>
                    
                    </div>    
            </div>
          </div>
    </div>
    <div className="position-relative mb-4">
                <img alt="" className="w-100" src={`/images/${profile.bannerPicture}`} />
                <div className="rounded-circle position-absolute profile-container" style={{ overflow: 'hidden', height: '100px', width: '100px', zIndex: 20 }}>
                    <img alt="" style={{ objectFit: 'cover', height: '100px', width: '100px' }} className="" src={`/images/${profile.profilePicture}`} />
                </div>
            </div>

    <div className="m-3 pt-5">
        <label for="name" className="fw-bolder"> Name </label><br/>
       
        <input id="name" onChange={(e) => setProfile({...profile, name:e.target.value})} className="mb-2 form-control" value={profile.name}/> <br/>
  
        <label for="bio" className="fw-bolder"> Bio </label><br/>
        <textarea id="bio" onChange={(e) => setProfile({...profile, bio:e.target.value})} className="mb-2 form-control" value={profile.bio} rows="3" cols="50"/> <br/>
        <label for="location" className="fw-bolder"> Location </label><br/>
        <input id="location" onChange={(e) => setProfile({...profile, location:e.target.value})} className="mb-2 form-control" value={profile.location}/> <br/>
        <label for="url" className="fw-bolder"> URL </label><br/>
        <input id="url" onChange={(e) => setProfile({...profile, website:e.target.value})} className="mb-2 form-control" value={profile.website}/> <br/>
        <label for="birthday" className="fw-bolder"> Birthday </label><br/>
        <input id="birthday" onChange={(e) => setProfile({...profile, dateOfBirth:e.target.value})} className="mb-2 form-control" value={profile.dateOfBirth}/> <br/>
    </div>

  </div>
 );
}
export default EditProfileComponent;