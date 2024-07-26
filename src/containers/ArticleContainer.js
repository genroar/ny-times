import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';

class ArticleContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=txMrnD3AitdGMkz3nth9G0GFi9W69lpi`)
      .then(response => {
        this.setState({ articles: response.data.results });
      })
      .catch(error => {
        console.error('Error fetching the articles', error);
      });
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticleContainer;
