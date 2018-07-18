import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class Dropdownn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItem: "Select location",
      listOpen: false,
      locations: [
        {
          title: 'New York',
          selected: false
        },
        {
          title: 'Dublin',
          selected: false
        },
        {
          title: 'California',
          selected: false
        },
        {
          title: 'Istanbul',
          selected: false
        },
        {
          title: 'Izmir',
          selected: false
        },
        {
          title: 'Oslo',
          selected: false
        }
      ]
    }

    this.handleHeaderClick = this.handleHeaderClick.bind(this);

  }

  handleHeaderClick() {
    this.setState((prevState) => {
      return {
        listOpen: !prevState.listOpen
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          headerItem={this.state.headerItem}
          handleHeaderClick={this.handleHeaderClick}
          listOpen={this.state.listOpen}
        />
        <List locations={this.state.locations} />
      </div>
    );
  }
}


export default Dropdownn;
