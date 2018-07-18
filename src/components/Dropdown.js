import React, { Component } from 'react';

class Dropdownn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div>
        hello {this.state.location[0].title}
      </div>
    );
  }
}


export default Dropdownn;
