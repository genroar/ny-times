import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import ArticleDetail from './ArticleDetail';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('axios');

describe('ArticleDetail', () => {
  const mockArticle = {
    id: 1,
    title: 'Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel',
    abstract: 'This is the abstract for Article 1',
    byline: 'Author 1',
    published_date: '2024-07-25',
    media: [
      {
        'media-metadata': [
          { url: 'image1.jpg' },
          { url: 'image2.jpg' },
          { url: 'image3.jpg' }
        ]
      }
    ]
  };
  

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { results: [mockArticle] } });
  });

  test('renders article details correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/article/1']}>
        <Routes>
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel/i)).toBeInTheDocument();
      expect(screen.getByText(/This is the abstract for Article 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Author 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Published on: 2024-07-25/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Three Seconds to Act: Boater Recounts How Whale Capsized His Vessel/i)).toBeInTheDocument();
    });  
  });
});
