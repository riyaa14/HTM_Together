import React, { useState } from "react";

function Cards(props){

    const[joinText, setJoinText] = useState("Join");
    const[IsActive, setIsActive] = useState(true);
    function handleClick(){
        setJoinText("Joined");
        setIsActive(false);
    }

    return (
    <div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="flip-card-img">
                        <img src= {props.img1} alt= "images"/>
                    </div>
                    <div class="flip-card-text">
                        <h2>{props.name}</h2>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="flip-card-img">
                        <img src= {props.img2} alt="Gif"/>
                    </div>
                    <div class="flip-card-text">
                        <h2>{props.tagline}</h2>
                        <div class = "row">
                           <div class = "button col-7"><button style = {{
                            borderColor: '#6f79ff',
                            color: '#6f79ff',
                            }} >Learn More</button></div> 
                           <div class = "button col-5"><button 
                           style = {{
                            borderColor: '#6f79ff',
                            backgroundColor: IsActive ? 'transparent' : '#d5d8fb',
                            color: '#6f79ff',
                            }}
                           onClick={handleClick}>{joinText}</button></div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Cards;