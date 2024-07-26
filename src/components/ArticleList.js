import React, { Component } from 'react';
import axios from 'axios';
import withRouter from './withRouter';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=txMrnD3AitdGMkz3nth9G0GFi9W69lpi')
      .then(response => {
        this.setState({ articles: response.data.results });
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }

  handleArticleClick = (id) => {
    this.props.navigate(`/article/${id}`);
  };

  render() {
    const { articles } = this.state;

    return (
      <div className='article__list__outer'>
        <div className='article__list__header'>
            <h1>NY Times Most Popular Articles</h1>
        </div>
        <div className='article__list'>
          {articles.map((article, index) => (
            <div key={article.id} className={`article__container ${index % 3 === 0 ? 'highlight' : ''}`}>
              <div className='article__outer'>
                <div className='article'>
                  <div className='image box'>
                    {article.media && article.media[0] && article.media[0]['media-metadata'] && (
                      <img src={article.media[0]['media-metadata'][0].url} alt={article.title} />
                    )}
                  </div>
                  <div className='content box'>
                    <span className='author'>{article.byline}</span>
                    <h2>{article.title}</h2>
                    <p>Date: {article.published_date}</p>
                    <p>{article.abstract}</p>
                    <button onClick={() => this.handleArticleClick(article.id)} className='readmore'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleList);
