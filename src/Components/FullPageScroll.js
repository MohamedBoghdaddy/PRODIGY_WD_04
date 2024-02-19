import React from "react";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import AboutMeSection from './AboutMeSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const FullPageScroll = () => {
  return (
    <Fullpage>
    <FullPageSections>
      <FullpageSection  >
    
      <AboutMeSection />

      </FullpageSection>
      <FullpageSection>
    
      <SkillsSection />

      </FullpageSection>
      <FullpageSection >
       
      <ProjectsSection />

      </FullpageSection>
      <FullpageSection  >
       
      <ContactSection />

      </FullpageSection>
    </FullPageSections>
  </Fullpage>
  );
};

export default FullPageScroll;
