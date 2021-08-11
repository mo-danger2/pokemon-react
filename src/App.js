import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Pokemon from "./components/Pokemon.jsx"
export default class App extends Component {

  state = {
    name1: "Eevee",
    name2: "Pikchu",
    strength1: 100,
    strength2: 100,
    status: "Pokemon Ready For Battle",
  }

  updateStrength1 = () => {
  
    if (this.state.strength1 > 10){
      this.setState({
        status: this.state.name1 + " is Kicking the " + this.state.name2,
        strength1: this.state.strength1 - 10
       })
    } else if (this.state.strength1 === 10){
      this.setState({
        status: "RIP Pikchu",
        strength1: this.state.strength1 - 10
      })
    }
  }



  updateStrength2 = () => {
    
    if (this.state.strength2 > 10){
      this.setState({
        status: this.state.name2 + " is stomping " + this.state.name1 + " to the ground", 
        strength2: this.state.strength2 - 10
      })
    } else if (this.state.strength2 === 10){
      this.setState({
        status: "RIP Eevee",
        strength2: this.state.strength2 - 10
      })
    }
  }



  render(){
  return (
    <div className="App">
      <Pokemon strength={this.state.strength1} updatestrength={this.updateStrength2} name="Eevee" image="https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851"/>
      
      <Pokemon strength={this.state.strength2} updatestrength={this.updateStrength1} name="Pikchu" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" className="Pikchu"/>
      <h1>{this.state.status}</h1>
      
      </div>
    
  );
}
}