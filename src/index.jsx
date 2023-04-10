import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    rootElement,
);
reportWebVitals();
