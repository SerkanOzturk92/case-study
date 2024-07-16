import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
const container = document.getElementById('root');
const root = createRoot(container);
import "./style.scss";

root.render(<App tab="home" />);
