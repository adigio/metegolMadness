import React, { Component } from 'react';

import NewPlayerForm from './NewPlayerForm'
import Navbar from './Navbar'

class Sidebar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="nav-mobile" className="sidenav sidenav-fixed">
        <Navbar />
        <NewPlayerForm  addingPlayer={this.props.addPlayer} />
      </div>
    )
  }
}

export default Sidebar;
