import React from 'react';
import articleimg from '../../assets/windons.png';
import './styles.css';
export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={articleimg} alt="" />
        <div className="article-infos">
          <h2>Designing Dashboards</h2>
          <h3>NASA</h3>

          <p>
            Amet minin non deserunt ullamco est sit aliqua dolor do ament sint.
            Velit officia consequat duis enin velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
        </div>
      </article>
    );
  }
}
