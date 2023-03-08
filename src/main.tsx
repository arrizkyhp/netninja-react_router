import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { CareersLayout, HelpLayout, RootLayout } from '@/components/layout';
import About from '@/pages/About';
import {
  Careers,
  CareersDetail,
  careersDetailLoader,
  CareersError,
  careersLoader,
} from '@/pages/Careers';
import { Contact, Faq } from '@/pages/Help';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

import App from './App';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareersDetail />}
          loader={careersDetailLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
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
