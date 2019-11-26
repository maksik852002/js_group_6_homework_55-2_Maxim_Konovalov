import React from 'react';

const Button = props => (
  <div className="d-flex justify-content-center">
    <button className="btn btn-secondary" onClick={props.reset}>Reset</button>
  </div>
)

export default Button;