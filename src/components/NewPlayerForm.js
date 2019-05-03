import React, { Component } from 'react';

class NewPlayerForm extends Component {

  constructor () {
    super();
    this.state = {
      name: ''
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValue(e){
    var nombre = e.target.value;
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    this.setState({
      name: nombre
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const player = this.state;
    this.props.addingPlayer(player);
    this.setState({
      name: ''
    });
  }

  render(){

    return (
      <div className="NewPlayerForm">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <h6>Agregue un nuevo jugador:</h6>
            <div className="input-field col s12">
              <input id="nombre"
                     type="text" name="name"
                     value={this.state.name}
                     onChange={this.handleValue}/>
              <label htmlFor="name">Nombre</label>
            </div>
             <button type="submit" className="btn-floating right btn-large waves-effect waves-light green accent-4">
                     <i className="material-icons">+</i>
             </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewPlayerForm;
