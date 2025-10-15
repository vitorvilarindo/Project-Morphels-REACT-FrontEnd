import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RevenuesPage from './pages/revenuesPage.jsx';
import ExpencesPage from './pages/expencesPage.jsx';
import GraficsPage from './pages/graficsPage.jsx';
import ReportsPage from './pages/reportsPage.jsx';
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
    element: <ExpencesPage />,
  },
  {
    path: "/grafics",
    element: <GraficsPage />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
