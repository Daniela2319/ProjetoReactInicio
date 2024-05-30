import React from 'react';

import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';

//componente em classe é uma classe que herda a classe component do react,
//e retorna html dentro do metodo render.

class App extends React.Component {
  //Método responsavel por renderizar o conteudo html do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </>
    );
  }
}

export default App;
