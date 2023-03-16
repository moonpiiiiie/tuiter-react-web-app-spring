//import {Link} from "react-router-dom";
//import Nav from "../nav";
//import NavigationSidebar from "./navigation-sidebar";
//import WhoToFollowList from "./who-to-follow-list";
//import PostSummaryList from "./post-summary-list";
//
//function Tuiter() {
// return(
//  <div>
//   <Nav/>
//   <NavigationSidebar active="home"/>
//   <PostSummaryList/>
//   <WhoToFollowList/>
//   <h1>Tuiter</h1>
//  </div>
// )
//}
//export default Tuiter

import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import React from "react";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./reducers/profile-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

function Tuiter() {
 return (
 <Provider store={store}>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
       <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
         <Route path="edit-profile" element={<EditProfileComponent/>}/>
       </Routes>
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>

 </Provider>
 );
}

export default Tuiter