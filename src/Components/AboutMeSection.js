import React from "react";
import styles from '../Styles/AboutMe.css';
import Me from '../assets/images/Me.jpg';

const AboutMeSection = () => {
   return( 
<div className="aboutme" id="home" >
{styles.section}
<h1>About me</h1>

<img className="Me" src={Me} alt="Me" />   
<h2>Let's Build Something Amazing Together</h2>
<p>As a fullstack developer, 
I thrive on turning ideas into reality.
Whether it's crafting elegant front-end experiences 
or architecting robust back-end solutions,
I'm here to bring your vision to life. 
Let's collaborate and create something extraordinary.</p>      
</div>

);

};
export default AboutMeSection;
