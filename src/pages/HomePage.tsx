import React from 'react';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import WorkShowcase from '../components/WorkShowcase';
import FinalCTA from '../components/FinalCTA';

// Temporary isolation switches for the mobile main-thread-freeze investigation — e.g.
// ?debug=1&disable=process skips the scroll-linked curve animation so we can tell whether it,
// the shader, or something else is responsible for the stalls seen on real devices.
// Remove once the investigation is closed out.
const disabledParts = new Set(
  (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('disable') : '')
    ?.split(',')
    .filter(Boolean)
);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {!disabledParts.has('process') && <ProcessSteps />}
      <WorkShowcase />
      <FinalCTA />
    </>
  );
};

export default HomePage;
