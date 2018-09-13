import React from 'react';
import HeaderItem from './HeaderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ handleHeaderClick, headerItem, listOpen }) => (
  <div onClick={handleHeaderClick}>
    <HeaderItem header={headerItem} />
    {listOpen ? (
      <FontAwesomeIcon icon="angle-up" />
    ) : (
      <FontAwesomeIcon icon="angle-down" />
    )}
  </div>
);

export default Header;
