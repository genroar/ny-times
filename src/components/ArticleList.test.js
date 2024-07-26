import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import ArticleList from './ArticleList';
import { BrowserRouter } from 'react-router-dom';


jest.mock('axios');

test('renders articles', async () => {
  const articles = [
    { id: 1, title: 'Article 1', abstract: 'Abstract 1' },
    { id: 2, title: 'Article 2', abstract: 'Abstract 2' },
  ];

  axios.get.mockResolvedValueOnce({ data: { results: articles } });

  render(
    <BrowserRouter>
      <ArticleList />
    </BrowserRouter>
  );

  await waitFor(() => {
    articles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });
});
