import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
  <App/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let b = 10;
b = 12;
//b = "sasha";

let a = {
  name: "Sasha",
  age: 10,
  address: {
    city: "Minsk",
    country: "Belarus"
  }
};

let users= [
  {
    name: "Sasha",
    age: 10,
    address: {
      city: "Minsk",
      country: "Belarus"
    }
  },
{
  name: "Ihar",
      age: 13,
    address: {
  city: "Minsk",
      country: "Belarus"
}
}
]




console.log(a.address.city);
console.log(b);
console.log(users[1].address.country);

