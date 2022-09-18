/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// import "../styles/landBackgrd.css";
//import Popup from "reactjs-popup";
//import 'reactjs-popup/dist/index.css';

function landing() {
  return (
    <div>
      <div class="about">
        <a
          class="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
          rel="noreferrer"
        >
          <span class="icon"></span>
        </a>
        <a
          class="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
          rel="noreferrer"
        >
          <span class="icon"></span>
        </a>
        <a
          class="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
          rel="noreferrer"
        >
          <span class="icon"></span>
        </a>
        <a class="bg_links logo"></a>
      </div>

      <section class="wrapper">
        <div class="container">
          <div id="scene" class="scene" data-hover-only="false">
            <div class="circle" data-depth="1.2"></div>

            <div class="one" data-depth="0.9">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="two" data-depth="0.60">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="three" data-depth="0.40">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <p class="p404" data-depth="0.50">
              TOGETHER
            </p>
            <p class="p404" data-depth="0.10">
              Together
            </p>
          </div>

          <div class="text">
            <article>
              <p>Connecting Simplified</p>
              <button>
                <a href="final.html">Begin!</a>
              </button>
            </article>
          </div>
        </div>
      </section>
      {/* <script src="landing.js"></script>
        <script src= "./landing.js" type="text/jsx"></script> */}
    </div>
  );
}

export default landing;
