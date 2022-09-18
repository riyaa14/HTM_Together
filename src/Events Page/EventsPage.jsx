import React from "react";
import Header from "../Main Stuff/Header";
//import Footer from "./Footer";
import Cards from "../Community Page/Cards";
import events from "../Event";
import Create from "../Main Stuff/Create";
import { useState } from "react";

function EventsPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <Header />

      <div class="row">
        <div class="col-6">
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="Search for events happening around you"
              />
              <button type="submit" class="searchButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="main">
            <div class="sub-main">
              <button onClick={() => setButtonPopup(true)} class="button-three">
                Create Event
              </button>
              <Create trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form class="create">
                  <h4>Create Your Event</h4>
                  <input type="text" placeholder="Name of Event" />
                  <input type="text" placeholder="Description" />
                  <input type="text" placeholder="Location" />
                  <input
                    type="text"
                    placeholder="Add Images (add the drive link) "
                  />
                  {/* <input type="text" placeholder = "" /> */}
                  <input type="text" placeholder="Tag Eg: music, yoga" />
                  {/* <input type="text" placeholder = "Tag Eg: music, yoga" /> */}
                </form>

                <button class="CreateComEv">Create</button>
              </Create>
            </div>
          </div>
        </div>
      </div>

      {events.map((events) => (
        <Cards
          key={events.key}
          img1={events.imgURL1}
          img2={events.imgURL2}
          name={events.name}
          tagline={events.tagline}
        />
      ))}

      {/* <Footer/> */}

      {/* <h1>THIS IS EVENTS PAGE</h1> */}
    </div>
  );
}

export default EventsPage;
