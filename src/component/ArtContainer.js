import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArtList from './ArtList';
import DetailsPage from './DetailsPage';
import Navbar from './Navbar';
import NotMatch from './NotMatch';

const ArtContainer = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<ArtList />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </div>
);

export default ArtContainer;
