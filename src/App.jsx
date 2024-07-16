import { useEffect, useState } from 'react';

import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import { Counter } from './components/Counter/counter';
import axios from 'axios';

//componente em classe é uma classe que herda a classe component do react,
//e retorna html dentro do metodo render.
//componente funcional é uma função que retorna um html
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        'https://api.spaceflightnewsapi.net/v3/articles',
      );
      const newsData = response.data;

      setNews(newsData);
    }
    loadNews();
  }, []);

  //Método responsavel por renderizar o conteudo html do nosso componente

  return (
    <>
      {/* <Counter /> */}
      <Navbar />
      <Counter id="counter" />
      <section id="articles">
        {news.map((article) => {
          return (
            <Article
              key={article.id}
              title={article.title}
              provider={article.newSite}
              description={article.summary}
              thumbnail={article.imageUrl}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
