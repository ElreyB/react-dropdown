import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
  <div>
    <ul>
      {props.locations.map((location, index) => {
        return (
          <ListItem key={index} listItem={location.title} listItemKey={location.key} onClick={props.onClick} />
        )
      })}
    </ul>
  </div>
);

export default List;
