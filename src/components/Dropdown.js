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
          id: 0,
          key: location,
          title: 'New York',
          selected: false
        },
        {
          id: 1,
          key: location,
          title: 'Dublin',
          selected: false
        },
        {
          id: 2,
          key: location,
          title: 'California',
          selected: false
        },
        {
          id: 3,
          key: location,
          title: 'Istanbul',
          selected: false
        },
        {
          id: 4,
          key: location,
          title: 'Izmir',
          selected: false
        },
        {
          id: 5,
          key: location,
          title: 'Oslo',
          selected: false
        }
      ]
    }

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);

  }

  handleHeaderClick() {
    this.setState((prevState) => {
      return {
        listOpen: !prevState.listOpen
      }
    });
  }

  handleListItemClick(index) {
    console.log(index);
    // const item = e.target.innerText;
    // const temp = this.state.locations[index]
    // console.log(temp);
    // temp.selected = !temp.selected
    // console.log(this.state.locations[0]);
    // this.setState((prevState) => {
    //   return {
    //     locations: prevState.lc
    //   }
    // });
  }

  render() {
    return (
      <div>
        <Header
          headerItem={this.state.headerItem}
          handleHeaderClick={this.handleHeaderClick}
          listOpen={this.state.listOpen}
        />
        {this.state.listOpen && <List locations={this.state.locations} onClick={this.handleListItemClick} />}
      </div>
    );
  }
}


export default Dropdownn;
