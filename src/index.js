//1. Create a new React app.
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main Stuff/Main";
//import App from "./Community Page/App";

//2. Create a App.jsx component.
ReactDOM.render(<Main/>,document.getElementById("root"));



// index pe root mai render the home page
// clicking on header - we'll route to sign up forms
// after clicking sgn up, go to succesfully logged in and then direct to dashboard.
// from the new header one can direct to any of the 3 pages.