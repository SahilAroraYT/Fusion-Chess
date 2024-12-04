import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';
import Pricing from './Pricing.tsx'
import Services from './Services.tsx';
import Contact from './Contact.tsx';
import FAQ from './FAQ.tsx';
import Register from './Register.tsx';
import AdminLogin from './AdminLogin.tsx';
import AdminDashboard from './AdminDashboard.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/admin/login",
        element: <AdminLogin />
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
