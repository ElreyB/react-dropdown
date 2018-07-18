import React from 'react';

const ListItem = (props) => (
  <div >
    <li onClick={props.onClick(props.listItemKey)}>{props.listItem}</li>
  </div>
);

export default ListItem;
