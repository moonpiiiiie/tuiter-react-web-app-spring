import {createSlice} from "@reduxjs/toolkit";

const profile = {
  "firstName": "Cheng",
  "lastName": "Xue",
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
};

const profileSlice = createSlice({
    name:"profile",
    initialState: profile
});

export default profileSlice.reducer;