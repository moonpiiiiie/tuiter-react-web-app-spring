import {createSlice} from "@reduxjs/toolkit";

const profile = [{
    "name": "Cheng Xue",
    "handle": "@chengxue",
    "profilePicture": "profile.jpg",
    "bannerPicture": "profile-background.JPG",
    "bio": "MSCS student at Northeastern University | GHC 22 | RTC | GWC",
    "website": "https://www.linkedin.com/in/cheng-xue/",
    "location": "San Jose, CA",
    "dateOfBirth": "9/10/1993",
    "dateJoined": "9/2021",
    "followingCount": 340,
    "followersCount": 223,
}];


const profileSlice = createSlice({
    name:"profile",
    initialState: profile,
    reducers: {
        updateProfile: (state, action) => {
           state.shift();
           state.push({
                "name": action.payload.name,
                "handle": action.payload.handle, 
                "profilePicture": action.payload.profilePicture,
                "bannerPicture": action.payload.bannerPicture,
                "bio": action.payload.bio,
                "website": action.payload.website,
                "location": action.payload.location,
                "dateOfBirth": action.payload.dateOfBirth,
                "dateJoined": action.payload.dateJoined,
                "followingCount": action.payload.followingCount,
                "followersCount": action.payload.followersCount, 
                  
           });
        } 
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;