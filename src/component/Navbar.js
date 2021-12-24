import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineMic, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Navbar = ({ name }) => {
  if (name === 'Art Details') {
    return (
      <div className="d-flex artPage">
        <NavLink to="/" exact><FaAngleLeft /></NavLink>
        <p>{name}</p>
        <div className="flex-setting d-flex">
          <MdOutlineMic />
          <MdSettings />
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex artPage">
      <p>Art Gallery</p>
      <p>{name}</p>
      <div className="flex-setting d-flex">
        <MdOutlineMic />
        <MdSettings />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Navbar;
