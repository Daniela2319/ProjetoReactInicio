import React from 'react';

import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import articleImg from './assets/windons.png';
import article1Img from './assets/windons2 (1).png';
import article2Img from './assets/windons3.png';
import { Counter } from './components/Counter/counter';

//componente em classe é uma classe que herda a classe component do react,
//e retorna html dentro do metodo render.

class App extends React.Component {
  //Método responsavel por renderizar o conteudo html do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <Counter id="counter" />
        <section id="articles">
          <Article
            title="Designing Dashboard"
            provider="NASA"
            description=" Amet minin non deserunt ullamco est sit aliqua dolor do ament sint.
            Velit officia consequat duis enin velit mollit. Exercitation veniam
            consequat sunt nostrud amet."
            thumbnail={articleImg}
          />
          <Article
            title="Vibrant"
            provider="Spcelles"
            description=" Amet minin non deserunt ullamco est sit aliqua dolor do ament sint.
           Velit officia consequat duis enin velit mollit. Exercitation veniam
           consequat sunt nostrud amet."
            thumbnail={article1Img}
          />
          <Article
            title="36 Days of Malayalas"
            provider="Spaceflight"
            description=" Amet minin non deserunt ullamco est sit aliqua dolor do ament sint.
           Velit officia consequat duis enin velit mollit. Exercitation veniam
           consequat sunt nostrud amet."
            thumbnail={article2Img}
          />
          <Article
            title="Designing Dashboard"
            provider="NASA"
            description=" Amet minin non deserunt ullamco est sit aliqua dolor do ament sint.
           Velit officia consequat duis enin velit mollit. Exercitation veniam
           consequat sunt nostrud amet."
            thumbnail={articleImg}
          />
        </section>
      </>
    );
  }
}

export default App;
