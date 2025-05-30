import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router basename="/emi-calculator">
        <App />
      </Router>
  </React.StrictMode>
)

