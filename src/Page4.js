import "./App.css";
import React from "react";
import pdf from './Resume.pdf'



function Page4() {

    function onResumeClick(){
        window.open(pdf);
    }
    return (
        <div className="typearea">

            <h1>Shawn Choi</h1>
        
            <a onClick={onResumeClick}> Resume </a>

            <br />    
    



            <a href={pdf} download>Click to download my Resume</a>

           
        </div>

    );
 
}

export default Page4;



