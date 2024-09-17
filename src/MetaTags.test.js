import React from 'react';
import { render } from '@testing-library/react';
import MetaTags from './MetaTags';

test('sets document title', () => {
  render(<MetaTags title="Test Title" />);
  expect(document.title).toBe('Test Title');
});

test('sets meta description', () => {
  render(<MetaTags description="Test Description" />);
  const metaDescription = document.querySelector('meta[name="description"]');
  expect(metaDescription).toHaveAttribute('content', 'Test Description');
});

// Add more tests as needed
