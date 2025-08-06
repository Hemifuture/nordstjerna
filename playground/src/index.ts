import './index.css';
import createApp from './App';
import "@nordstjerna/style";

const root = document.getElementById('root');

if (root) {
  const app = createApp();
  root.appendChild(app);
}
