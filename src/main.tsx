import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import About from '@/pages/About';
import Home from '@/pages/Home';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <header>
          <nav>
            <h1>Practice Router</h1>
            <div className="menuLink">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </Suspense>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
