import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './component/Layout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';
import DonationPages from './Pages/DonationPages/DonationPages';
import StaticPages from './Pages/StaticPages/StaticPages';
import EducationPage from './component/EducationPage/EducationPage';
import DonationCard from './component/DonationCard/DonationCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('/donate.json'),
      },
      {
        path: '/donations',
        element: <DonationPages />,
        loader: () => fetch('/donate.json'),
      },
      {
        path: '/static',
        element: <StaticPages />,
      },
      {
        path: '/donation/:id',
        element: <EducationPage />,
        loader: () => fetch('/donate.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
