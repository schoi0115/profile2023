import "./App.css";
import React, { useState } from "react";
import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
import pic3 from './images/3.jpg'
import pic4 from './images/4.jpg'
import pic5 from './images/5.jpg'
import pic6 from './images/6.jpg'
import pic7 from './images/7.jpg'
import pic8 from './images/8.jpg'
import pic9 from './images/9.jpg'
import pic10 from './images/10.jpg'
import pic11 from './images/11.jpg'
import pic12 from './images/12.jpg'
import pic13 from './images/13.jpg'
import pic14 from './images/14.jpg'

function Page1() {


  return (
    <div className="typearea">
      <h1>Proactive</h1>
      <h1>Creative</h1>
      <h1>Team Player</h1>
      <h1>Sculptor</h1>
      <h1>Planner</h1>
      <div className="picContainer">
        <img className="Page1-pics1" src={pic13} />
        <img className="Page1-pics2" src={pic1} />
        <img className="Page1-pics3" src={pic14} />
        <img className="Page1-pics4" src={pic10} />
        <img className="Page1-pics5" src={pic8} />
        <img className="Page1-pics6" src={pic6} />
        <img className="Page1-pics7" src={pic4} />
        <img className="Page1-pics8" src={pic9} />
        <img className="Page1-pics9" src={pic11} />
        <img className="Page1-pics10" src={pic2} />

        <img className="Page1-pics11" src={pic5} />
        <img className="Page1-pics12" src={pic12} />
        <img className="Page1-pics13" src={pic7} />
        <img className="Page1-pics14" src={pic3} />
      </div>



    </div>

  );

}

export default Page1;
