import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import { Container } from 'react-bootstrap';
import LoadingCard from './Components/LoadingCard';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKINGID as any, {
  // debug: process.env.NODE_ENV === "development"
});
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Container><LoadingCard /></Container>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(undefined);
