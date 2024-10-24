import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import { PostProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <PostProvider>
     <App />
    </PostProvider>
  </StrictMode>
);
