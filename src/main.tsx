import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx: Entry point loaded');

const container = document.getElementById('root');
if (!container) {
  console.error('Main.tsx: Root container not found!');
} else {
  console.log('Main.tsx: Root container found, rendering...');
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
