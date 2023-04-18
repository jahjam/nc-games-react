import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ReviewContextProvider } from './store/review-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReviewContextProvider>
      <App />
    </ReviewContextProvider>
  </React.StrictMode>
);
