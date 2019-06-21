import React, { Component } from 'react';
import ProjectCard from '../components/work/ProjectCard/ProjectCard';

export default function WorkPage() {
  return (
    <ProjectCard 
      name={"whatt"}
      description={"description123"} 
      image={require('../images/portrait-bg.png')}
      tools={['tool1', 'tool2']}
    />
  )
}