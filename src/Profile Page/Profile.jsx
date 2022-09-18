import React from "react";
import Header from "../Main Stuff/Header";
//import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <Header />

      <div class="card">
        <div class="cover-photo">
          <img
            src="https://i.imgur.com/KykRUCV.jpeg"
            alt="images"
            class="profile"
          />
        </div>

        <h3 class="profile-name" style={{ color: "black" }}>
          JAMES CARLSON
        </h3>

        <p class="about-p">AGE: 24 </p>
        <p class="about-p">PROFFESION: Front End Developer</p>
        <p class="about-p">
          ADDRESS: 891 Rachelle Flat Apt. 032 Port Franz, Rhode Island{" "}
        </p>
        <p class="about-p"> PINCODE: 110045 </p>
        <p class="about-p">EMAIL ID: james24@gmail.com </p>
        <p class="about-p">CONTACT NUMBER: 9457203792 </p>
        <p class="about-p"> VERIFICATION STATUS: VERIFIED</p>
        <p class="about-p">ABC: LMNOPQ </p>
        <button class="btn">Edit Profile</button>
        <div class="icons">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Profile;
