import './style.css';
import { App } from './app.js';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  const appInstance = new App();
  window.app = appInstance;
  appInstance.init();
});
