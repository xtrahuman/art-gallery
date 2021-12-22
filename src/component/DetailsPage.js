import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { eachArt } from '../redux/DetailsPage/DetailsPage';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(eachArt(id));
  }, []);

  const art = useSelector((state) => state.detailReducer);
  return (
    art.map((art) => (
      <div key={art.id}>
        <div>{art.id}</div>
        <div>
          <img src={art.imgt} alt="art" />
          {/* <p>{art.imgt}</p> */}
        </div>
      </div>
    ))

  );
};

export default DetailsPage;
