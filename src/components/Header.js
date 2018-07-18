import React from 'react';
import HeaderItem from './HeaderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = (props) => (
  <div onClick={props.handleHeaderClick}>
    <HeaderItem header={props.headerItem} />
    <FontAwesomeIcon icon="angle-down" />
  </div>
);

export default Header;
