import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FacebookEmojiCounter from './FacebookEmojiCounter';
import ToggleMode from './ToggleModeComponent';

// Create root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <FacebookEmojiCounter type="happy" />
    <ToggleMode />
  </React.Fragment>
);
