import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArtList from './ArtList';
import DetailsPage from './DetailsPage';
import NotMatch from './NotMatch';
import { getArt } from '../redux/ArtList/Artlist';

const ArtContainer = () => {
  const art = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArt());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<ArtList art={art} />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};

export default ArtContainer;
