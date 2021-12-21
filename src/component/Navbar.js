import React from 'react';
// import PropTypes from 'prop-types';
import { MdOutlineMic, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const p = 'back';
  //   if ( p != 'nothing') {
  //     return (
  //       <div >
  //         <NavLink to="/" exact>{ p }</NavLink>
  //         <p>newpage</p>
  //         <div >
  //           <MdOutlineMic />
  //           <MdSettings />
  //         </div>
  //       </div>
  //     );
  //   }
  return (
    <div>
      <NavLink to="/">{ p }</NavLink>
      <p>home</p>
      <p>homepage</p>
      <div>
        <MdOutlineMic />
        <MdSettings />
      </div>
    </div>
  );
};
export default Navbar;
