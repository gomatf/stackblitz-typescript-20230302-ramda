// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Ramda をインポート
import * as R from 'ramda';
console.log('Test message');

const obj = {
  message: 'Hello, Ramda!',
};

console.log(R.clone(obj));
