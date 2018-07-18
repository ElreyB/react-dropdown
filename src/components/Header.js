import React from 'react';
import HeaderItem from './HeaderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = (props) => (
  <div onClick={props.handleHeaderClick}>
    <HeaderItem header={props.headerItem} />
    {props.listOpen ? <FontAwesomeIcon icon="angle-up" /> : <FontAwesomeIcon icon="angle-down" />}

  </div>
);

export default Header;
