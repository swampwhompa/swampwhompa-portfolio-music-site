import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import MusicPage from './MusicPage';

import ShaderBackground from './ShaderBackground';
import DesignPortfolio from './DesignPortfolio';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';
import SocialButtons from './SocialButtons';

function App() {
  return (
    <BrowserRouter>
    <ShaderBackground />
      <SocialButtons />

      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design" element={<DesignPortfolio />} />
          <Route path="/design/:projectId" element={<ProjectDetail />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
