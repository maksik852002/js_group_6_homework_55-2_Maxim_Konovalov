import React, {Component} from 'react';

import Block from './Block/Block';
import Tries from './Tries/Tries';
import PlayingField from './PlayingField/PlayingField';
import Button from './Button/Button';

import './bootstrap.min.css';


class App extends Component {
  state = {
    blocks: [],
    tries:0,
    win: false,
  };

  clearState = () => {
    let blocks = [...this.state.blocks];
    blocks = [];
    let tries = this.state.tries;
    tries = 0;
    let win = this.state.win;
    win = false;
    this.setState({blocks,tries,win});
  };

  newGame = () => {
    const index = Math.floor(Math.random() * (36));
    for (var i=0; i < 36; i++) {
      if (i === index) {
        this.state.blocks.push({checked: false, hastlem: true});
      } else {
        this.state.blocks.push({checked: false, hastlem: false});
      }
    }
  };

  winCheck = () => {
    let win = this.state.win;
     this.state.blocks.forEach(block =>{
       if(block.checked&&block.hastlem) {
         alert(`Вы нашли кольцо. Чтобы начать заново нажмите "reset"`);
         win = true;
         this.setState({win});
       }
     })
   };

  clickBlock = i => {
    const blocks = [...this.state.blocks];
    let tries = this.state.tries;
    if (!blocks[i].checked) {
      tries++;
    }
    blocks[i].checked = true;
    this.setState({blocks, tries});
    this.winCheck();
  };

  render = () => {
    if (this.state.blocks.length === 0) {
      this.newGame();
    }
    return (
      <div className = "container">
        <PlayingField>
          {this.state.blocks.map((block, i) => (
            this.state.win ?
            <Block
              key={i}
              checked = {block.checked}
              hastlem = {block.hastlem}
            /> :
            <Block
              key={i}
              checked = {block.checked}
              hastlem = {block.hastlem}
              click = {() => this.clickBlock(i)}
            /> 
          ))}
        </PlayingField>
        <Tries
          tries = {this.state.tries}
        />
        <Button
          reset = {this.clearState}
        />
      </div>
    )
  }
};

export default App;