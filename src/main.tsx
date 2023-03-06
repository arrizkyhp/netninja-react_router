import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from '@/components/layout/RootLayout';
import About from '@/pages/About';
import Home from '@/pages/Home';

import App from './App';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
      {/* <main></main> */}
    </Suspense>
    <App />
  </StrictMode>,
);
