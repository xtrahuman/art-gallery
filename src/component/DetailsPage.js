import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { eachArt } from '../redux/DetailsPage/DetailsPage';
import Navbar from './Navbar';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(eachArt(id));
  }, []);

  const art = useSelector((state) => state.detailReducer);
  return (
    <div className="checkDetails">
      <Navbar name="Art Details" />
      {art.map((art) => (
        <div key={art.id}>
          <div className="ArtGallery detailGallery">
            <div className="detailImg">
              <img src={art.imgt} alt="art" />
            </div>
            <div className="artText detailText">
              <h2>{art.title}</h2>
            </div>
          </div>
          <div>
            <p className="p-tile">{art.title}</p>
            <div className="d-flex detail-bar">
              <p>Display date</p>
              <p className="p-det">{art.displayDate}</p>
            </div>
            <div className="d-flex detail-bar">
              <p>Artist Profile</p>
              <p className="p-det">{art.artist}</p>
            </div>
            <div className="d-flex detail-bar">
              <p>Country of Origin</p>
              <p className="p-det">{art.country}</p>
            </div>
            <div className="d-flex detail-bar">
              <p>Credit</p>
              <p className="p-det">{art.credit}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
