import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RevenuesPage from './pages/revenuesPage.jsx';
import Expences from './pages/expences.jsx';
import Grafics from './pages/grafics.jsx';
import Reports from './pages/reports.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/revenues",
    element: <RevenuesPage />,
  },
  {
    path: "/expences",
    element: <Expences />,
  },
  {
    path: "/grafics",
    element: <Grafics />,
  },
  {
    path: "/reports",
    element: <Reports />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
