import React from 'react';
import './counter.css';
import { useState } from 'react';

export function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div id="counter">
      <h1>{contador}</h1>

      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <button
          id="btn"
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          DIMINUIR
        </button>
        <button
          id="btn1"
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          AUMENTA
        </button>
      </div>
    </div>
  );
}
