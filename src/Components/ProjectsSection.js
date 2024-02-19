import React from "react";
import projectsStyles from '../Styles/Projects.css';
import Petzone from '../assets/images/Petzone.png';
import Stopwatch from '../assets/images/stopwatch.png';
import prodigypage from '../assets/images/prodigypage.png';
import XO from '../assets/images/XO.png';

const ProjectsSection = () => {
   return( 
      <div className={projectsStyles.section} id="projects">
         <h1>Projects</h1>
         <div>
            <h2>Project 1: Petzone</h2>
            <img className="Petzone" src={Petzone} alt="Petzone" />   
            <p>Veterinary Management System This web application streamlines client, patient, and appointment management for veterinary clinics. Admins and staff can perform CRUD operations on clients and patients, manage appointments, and clients can schedule appointments and check on their pets via the user-friendly interface.</p>
         </div>

         <div>
            <h2>Project 2: Responsive Landing Web page</h2>
            <img className="prodigypage" src={prodigypage} alt="prodigypage" />   
            <p>This project creates a responsive landing page using HTML, CSS, and JavaScript. It features dynamic navigation effects and interactivity, aiming to engage visitors with visually appealing design.</p>
         </div>

         <div>
            <h2>Project 3: interactive stopwatch web app</h2>
            <img className="Stopwatch" src={Stopwatch} alt="Stopwatch" />   
            <p>An interactive stopwatch web app using HTML, CSS, and JavaScript. Implement start, pause, and reset functionalities for accurate time tracking. Users can record lap times for precise measurement.</p>
         </div>

         <div>
            <h2>Project 4: Tic-Tac-Toe Web application</h2>
            <img className="XO" src={XO} alt="XO" />   
            <p>Tic-Tac-Toe Web application used HTML, CSS, and JavaScript. By implementing functions to handle user clicks, track game state, and check for winning conditions.</p>
         </div>
      </div>
   );
};

export default ProjectsSection;
