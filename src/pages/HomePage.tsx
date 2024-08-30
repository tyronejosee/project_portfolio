import { useState, useEffect } from 'react';

import { AboutSection, SkillSection, ProjectSection, ExperienceSection, FadeInSection, RotateScaleUp, Loader } from "../components";;
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";




export function HomePage() {
  const activeProjects = projectsData.filter((project) => project.status) || [];
  const activeSkills = skillsData.filter((skill) => skill.status) || [];

  return (
    <>
      <FadeInSection>
        <AboutSection />
        <RotateScaleUp className='flex justify-center animate-pulse opacity-80'>
          <img
            className="h-10 md:h-20"
            src="/scroll-arrows.gif"
            alt="Scroll Down"
          />
        </RotateScaleUp>
      </FadeInSection>

      <FadeInSection>
        <ExperienceSection />
      </FadeInSection>

      <FadeInSection>
        <ProjectSection projects={activeProjects} />
      </FadeInSection>

      <FadeInSection>
        <SkillSection skills={activeSkills} />
      </FadeInSection>
    </>
  );
}
