import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ArtList from './ArtList';
import DetailsPage from './DetailsPage';
import NotMatch from './NotMatch';
import { getArt } from '../redux/ArtList/Artlist';

const ArtContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArt());
  }, [dispatch]);

  return (
    <div className="allPages">
      <Routes>
        <Route path="/" element={<ArtList />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};

export default ArtContainer;
