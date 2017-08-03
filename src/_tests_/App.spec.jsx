import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

describe('basic test for portfolio site', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
  });
})