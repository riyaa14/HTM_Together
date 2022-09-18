import React from "react";
import Header from "../Main Stuff/Header";
//import Footer from "./Footer";

function Yours(props) {
  return (
    <div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="flip-card-img">
              <img src={props.img1} alt="images" />
            </div>
            <div class="flip-card-text">
              <h2>{props.name}</h2>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="flip-card-img">
              <img src={props.img2} alt="Gif" />
            </div>
            <div class="flip-card-text">
              <h2>{props.tagline}</h2>
              <div class="row">
                <div class="button chat">
                  <button
                    style={{
                      borderColor: "#6f79ff",
                      color: "#6f79ff",
                    }}
                  >
                    {" "}
                    CHAT{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dash() {
  return (
    <div>
      <Header />
      <div className="Dash">
        <h3>Welcome Back James!</h3>

        <div className="Events">
          <h4>Your Upcoming Events</h4>
          <Yours
            key="1"
            name="PoeticDash"
            img1="https://s3.wp.wsu.edu/uploads/sites/1927/2021/11/stand-up-comedy-night-dig-signage.jpg"
            img2="https://media2.giphy.com/media/fhsZIKdggR8mFtbcaF/200w.gif?cid=82a1493bp1cvn7ichzneygoudicmewgv7vpze781r3h1n2yi&rid=200w.gif&ct=g"
            tagline="Invoke your inner Mirza Ghalib!"
          />

          <Yours
            key="2"
            img1="https://www.1mg.com/articles/wp-content/uploads/2019/09/morning-walk.png"
            img2="https://media1.giphy.com/media/LwHgyDPY00ItITwO15/giphy.gif?cid=6c09b9521jzc9d4wy3q8noq5t21poox5xbqqxk5uyhg2f3sp&rid=giphy.gif&ct=s"
            name="Morning walkers!"
            tagline="Give problem, get solution"
          />

          <Yours
            key="3"
            img1="https://s.tmimgcdn.com/scr/1200x750/148300/religious-symbols-illustration_148377-original.jpg"
            img2="https://s.tmimgcdn.com/scr/1200x750/148300/religious-symbols-illustration_148377-original.jpg"
            name="Devotional"
            tagline="Dharma and Karma"
          />
        </div>

        <div className="Com">
          <h4>Your Communities</h4>
          <Yours
            key="1"
            img1="https://www.thehindu.com/life-and-style/homes-and-gardens/qh1fbs/article34191992.ece/alternates/LANDSCAPE_1200/Akimpsarahmosaic4jpg"
            img2="https://thumbs.gfycat.com/ArcticGiganticGonolek-size_restricted.gif"
            name="Mosaic Art"
            tagline="Vibe with the homies"
          />

          <Yours
            key="2"
            img1="https://asiasociety.org/sites/default/files/styles/1200w/public/K/k-112-113-web_0.jpg"
            img2="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f56f0943836113.57ff3f80de54a.gif"
            name="Discussing epics"
            tagline="Understanding Allusions of God"
          />
        </div>
      </div>
    </div>
  );
}

export default Dash;
