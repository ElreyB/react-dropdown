import React from 'react';
import ListItem from './ListItem';

const List = ({ locations, ...props }) => (
  <div>
    <ul>
      {locations.map((location, index) => {
        return (
          <ListItem
            key={index}
            listItem={location.title}
            selected={location.selected}
            listItemKey={index}
            {...props}
          />
        );
      })}
    </ul>
  </div>
);

export default List;
