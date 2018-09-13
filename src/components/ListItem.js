import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = (props) => (
  <div >
    <li onClick={() => props.onClick(props.listItemKey)}>
      {props.listItem}
      {props.selected && <FontAwesomeIcon icon="check" />}
    </li>
  </div>
);

export default ListItem;
