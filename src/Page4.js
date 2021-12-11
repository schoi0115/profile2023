import "./App.css";
import React from "react";
import pdf from './Resume.pdf'



function Page4() {

    function onResumeClick() {
        window.open(pdf);
    }
    return (
        <div className="typearea">

            <h1>Shawn Choi</h1>
            <a className="resumePreview" onClick={onResumeClick}> Resume (Click to see the preview) </a>
            <br />
            <br />
            <a href={pdf} download>Click to download my Resume</a>
        

            <p className="experience">
            <br />
                Dear HR:

                I am interested in the Software Engineer position. I recently completed rigorous courses from the Flatiron School’s Software Engineering Bootcamp and received my certification.
                <br />
                <br />

                I mainly focused on two languages: React in JavaScript, Rails on Ruby (back-end) and SQL during the bootcamp and I am currently learning Python and Java to broaden my skills set. Throughout the program, my communication and coding skills strengthened as I’ve collaborated with avid individuals in group-based projects.
                <br />
                <br />
                I have 4 years of managerial experiences in the office-setting which involved working in a fast-paced environment with demanding deadlines. As someone who is creative, tech-savvy and meticulous to detail, I can comprehend and develop new skills readily. Greater details of what I can offer and of my accomplishments can be found on my resume.
                My goal right now is to launch my career in tech and be a part of an exceptional company,
                where I can be grow and further my skills as a software engineer. I look forward to an opportunity to discuss my potential contribution to your company. I can be reached by phone and email.
                <br />
                <br />
                Sincerely,
                <br />
                
                Seungil Choi
            </p>


        </div>

    );

}

export default Page4;




