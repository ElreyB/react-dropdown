import React, { Component } from 'react';
import Header from './Header';

class Dropdownn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItem: "Select location",
      listOpen: false,
      location: [
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
        />
        {`${this.state.listOpen}`}
      </div>
    );
  }
}


export default Dropdownn;
