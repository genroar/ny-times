import React, { Component } from 'react';
import axios from 'axios';
import withRouter from './withRouter';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    axios
      .get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=txMrnD3AitdGMkz3nth9G0GFi9W69lpi`)
      .then(response => {
        const article = response.data.results.find(item => item.id === Number(id));
        this.setState({ article });
      })
      .catch(error => {
        console.error('Error fetching article:', error);
      });
  }

  render() {
    const { article } = this.state;

    if (!article) {
      return <div className="loading">Loading...</div>;
    }

    console.log("Article Title:",article.title)

    return (
      <div className="article-detail__outer">
        <div className="article-detail__container">
          <h1 className="article-detail__title">{article.title}</h1>
          {article.media && article.media[0] && article.media[0]['media-metadata'] && (
            <img
              src={article.media[0]['media-metadata'][2].url}
              alt={article.title}
              className="article-detail__image"
            />
          )}
          <p className="article-detail__abstract">{article.abstract}</p>
          <p className="article-detail__author">{article.byline}</p>
          <p className="article-detail__date">Published on: {article.published_date}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleDetail);
