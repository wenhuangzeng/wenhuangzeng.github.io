import React from 'react';
import './HomePage.css';
import AboutMe from '../components/home/AboutMe';
import Portrait from '../components/home/Portrait';


export default function HomePage() {
  return (
    <div className="home-page">
      <AboutMe />
      <Portrait />
    </div>
  )
}