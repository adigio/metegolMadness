import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { players } from './jsons/players.json'
import Sidebar from './components/Sidebar'
import ViewPlayer from './components/dataPlayer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      players
    }
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer(player){
    this.setState({
      players: [...this.state.players, player]
    })
  }

  removePlayer(index){
    var nombre = this.state.players.name;
    this.setState({
      players: this.state.players.filter((e,i) => {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="App">

      <Sidebar addPlayer={this.addPlayer} players={this.state.players}/>
      <main>
        <div className="container">
          <ViewPlayer removePlayer={this.removePlayer} players={this.state.players}/>
        </div>
      </main>

      </div>
    );
  }
}

export default App;
