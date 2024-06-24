import React from 'react';
import './counter.css';
export class Counter extends React.Component {
  constructor() {
    super();
    //this.contador = 0;
    this.state = { contador: 0 };
  }
  render() {
    return (
      <div id="counter">
        <h1>{this.state.contador}</h1>

        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
          <button
            id="btn"
            onClick={() => {
              this.setState({
                contador: this.state.contador - 1,
              });
            }}
          >
            DIMINUIR
          </button>
          <button
            id="btn1"
            onClick={() => {
              this.setState({
                contador: this.state.contador + 1,
              });
            }}
          >
            AUMENTA
          </button>
        </div>
      </div>
    );
  }
}
