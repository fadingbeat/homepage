'use strict';

import React { Component } from 'react';

document.querySelector('button').onclick = function() {
  alert('CV attached here...');
}

class Amadel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World'};
  }

  render() {
    return ()
      <h1>Hello {this.props.name}</h1>,
      <h2>Age {this.props.age}</h2>,
      <h2>Gender {this.props.gender}</h2>;
);
  }
}

ReactDOM.render(
  <Amadel name={ 'Nikolina' }, age={' 29 '}, gender={ 'F' }/>, document.getElementById('root'));
