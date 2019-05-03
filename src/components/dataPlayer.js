import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class ViewPlayer extends Component {

  constructor(props){
    super(props);

    this.removePlayer = this.props.removePlayer;
  }

  render(){
    const players = this.props.players.map((player,  i) =>{
      return(
        <FadeIn>
          <div className="col m3" >
            <div className="card green accent-4">
              <div className="card-content white-text">
                <span className="card-title activator">{player.name} <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.removePlayer.bind(this,i)}>X</button></span>
            </div>
            </div>
          </div>
        </FadeIn>
      );

    });

    return(
      <div className="ViewPlayer">
        {this.props.players.length > 0 &&
          <FadeIn>
            <h3 className="header">Jugadores</h3>
          </FadeIn>
        }

        <div className="row">
          {players}
        </div>
        {this.props.players.length < 2
          ? <FadeIn><a href="#" className="btn disabled right">El minimo de jugadores es 2</a></FadeIn>
          : <FadeIn><a href="#" className="btn right">¡Jugar!</a></FadeIn>
        }

      </div>
    )
  }

}

export default ViewPlayer;
