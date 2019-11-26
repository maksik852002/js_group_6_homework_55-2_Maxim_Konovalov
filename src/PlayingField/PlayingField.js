import React from 'react';
import './PlayingField.css'

const PlayingField = props => (
  <div className="playingField">{props.children}</div>
);

export default PlayingField;