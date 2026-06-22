import React from 'react';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import WorkShowcase from '../components/WorkShowcase';
import FinalCTA from '../components/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <WorkShowcase />
      <FinalCTA />
    </>
  );
};

export default HomePage;
