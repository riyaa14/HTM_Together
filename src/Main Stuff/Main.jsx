import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Footer from "./Footer";
import App from "../Community Page/App";
import EventsPage from "../Events Page/EventsPage";
import Profile from "../Profile Page/Profile";
import Header from "./Header";
import Dash from "../Dashboard/Dash";
import Landing from "../Landing/Land";

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}

        <Routes>
          {/* <Route path = "/" element = {<landing/>} />    (landing.jsx)
              <Route path = "/Home" element = {<home/>} />    (home page)
              <Route path = "/signIn" element = {<signIn/>} />   (sign in form)
            <Route path = "/success" element = {<final/>} />  (final page)
            */}
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/communities" element={<App />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
