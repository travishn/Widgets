import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const store = {
    tabs: [ {
      id: 1,
      title: 'one',
      content: 'Page one'
    },
    {
      id: 2,
      title: 'two',
      content: 'Page two'
    },
    {
      id: 3,
      title: 'three',
      content: 'Page three'
    }]
  };

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});