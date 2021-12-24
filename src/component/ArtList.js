import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import gallery from '../images/gallery.svg';
import Navbar from './Navbar';

const ArtList = () => {
  const art = useSelector((state) => state.artReducer);
  const [input, setInput] = useState('');
  const allArt = art.filter((art) => {
    let newArt;
    if (input === '') {
      newArt = art;
    }
    if (art.title.toLowerCase().includes(input.toLowerCase())) {
      newArt = art;
    }
    return newArt;
  });

  const Handlechange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="checkArt">
      <Navbar name="Art List" />
      <div className="artContainer">
        <div className="ArtGallery">
          <div className="listImg">
            <img src={gallery} alt="art" />
          </div>
          <div className="artText">
            <h1>Art Gallery</h1>
            <p>
              {`${allArt.length} `}
              {`ArtWork${allArt.length <= 1 ? '' : 's'}`}
            </p>
          </div>
        </div>
        <div className="searchInput d-flex">
          <input placeholder="search art" onChange={Handlechange} />
        </div>
        <div className="d-flex justify-row">
          <div className="row">
            {allArt.map((art) => (
              <div key={art.id} className="artCont">
                <div className="artFlex">
                  <div className="img-f"><Link className="artTitle" to={`/details/${art.id}`}><img src={art.imgcheck === null ? gallery : art.imgt} alt="art" /></Link></div>
                  <div className="artLink">
                    <Link to={`/details/${art.id}`}><FaRegArrowAltCircleRight className="arrowCircle" /></Link>
                  </div>
                </div>
                <div>
                  <Link className="artTitle" to={`/details/${art.id}`}>
                    <p>{art.title}</p>
                    <p>{art.displayDate}</p>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtList;
