import "./App.css";
import React from "react";
import Propic from './shawn3.png'



function Home() {

    return (
        
        <div className="home">
            <h1>Shawn Choi</h1>
           <img className="Img" src={Propic} />
           <p className="shawnbio">
            Bilingual in Korean and English; Bachelor of Fine Arts; Proficient in Quickbooks, Adobe Photoshop, Microsoft/Google platforms, Zoom; Seeking full-time Office Administrator/Operator positions. 
            <br />
            <br />
            Worked 5+ years in managerial positions; Worked with patients one-on-one from diverse backgrounds and effectively lead and trained new staff, while being a team player. 
            <br />
            <br />

            I am a quick learner and enjoy a face-paced environment. As a strong patient advocate, excellent patient care, safety and education are my top priorities.
            <br />
            <br />
            <h4>
            Technical Skills:
            </h4>
            Ruby, Rails, SQL, JavaScript, React, QuickBooks, Photoshop
            <br />
            <br />
            <h4>
            Flatiron School
            </h4>
            Full Stack Web Development 2021
            <br />
            <h4>
            Binghamton University
            </h4>

            Bachelor of Fine Arts 2015
            </p>
            

        </div>
      

    );
 
}

export default Home;




