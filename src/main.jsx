import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RevenuesPage from './pages/revenuesPage.jsx';
import ExpensesPage from './pages/expensesPage.jsx';
import Register from './pages/register.jsx';
import ReportsPage from './pages/reportsPage.jsx';
import Login from './pages/mainPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <Login />,
  },
  {
    path: "/revenues",
    element: <RevenuesPage />,
  },
  {
    path: "/expences",
    element: <ExpensesPage />,
  },
  {
    path: "/grafics",
    element: <Register />,
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
