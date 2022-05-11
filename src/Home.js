import "./App.css";
import React from "react";
import Propic from './shawn3.png'



function Home() {

    return (

        <div className="home">
            <h1 sytle={{position:'flex'}}>Shawn Choi</h1>
            <h2 style={{ marginLeft: "20%" }}>Software Engineer</h2>
            <img className="Img" src={Propic} />
            <p className="shawnbio">
                <h4>
                    <div className='tech-table'>
<h3>
                        Technical Skills:
                        </h3>     
                        <ul> Languages
                            
                            <li>React on JavaScript</li>
                            <li>Ruby on Rails</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>Angular</li>
                            <br />

                        </ul>

                        <br />
                        <br />
                        <ul>Tools
                            
                            <li>GitHub</li>
                            <li>Chrome Dev Tools</li>
                            <li>Postman</li>
                            <li>Visual Studio</li>
                            <li>Linux</li>
                            <li>Ubuntu</li>
                        </ul>
                        
                    </div>
    

                    Flatiron School
                    <li>Certificate of Completion of Software Engineering 2021</li>
                </h4>

                <h4>
                    Binghamton University
                    <li>Bachelor of Fine Arts 2015</li>
                </h4>

                Bilingual in Korean and English. Bachelor of Fine Arts; Experienced in Ruby on Rails and JavaScript based programming and a background in Arts and Design. Possess strong skills in sales and financial management that help to see the customer’s perspective.
                proficient in Quickbooks, Adobe Photoshop, Microsoft/Google platforms, Zoom. Seeking full-time Full-Stack Developer positions.
                <br />
                <br />
                Worked 5+ years in managerial positions. Worked with customers one-on-one from diverse backgrounds and effectively lead and trained new staff, while being a team player.
                <br />
                <br />

                I am a quick learner and enjoy a face-paced environment. As a strong patient advocate, excellent patient care, safety and education are my top priorities.


            </p>


        </div>


    );

}

export default Home;




