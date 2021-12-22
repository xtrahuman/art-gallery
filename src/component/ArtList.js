import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtList = ({ art }) => {
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
    <div>
      <input placeholder="Enter Post Title" onChange={Handlechange} />
      {allArt.map((art) => (
        <div key={art.id}>
          <div><img src={art.imgt} alt="art" /></div>
          <div>{art.title}</div>
          <div>
            <Link to={`/details/${art.id}`}>click here</Link>
          </div>
        </div>
      ))}

    </div>

  );
};
ArtList.propTypes = {
  art: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ArtList;
