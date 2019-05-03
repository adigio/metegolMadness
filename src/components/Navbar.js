import React, { Component } from 'react';

class Navbar extends Component {
  render(){
    return (
      <nav className="white-text green  accent-4" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">MetegolMadness</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;
