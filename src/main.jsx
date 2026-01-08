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
import { WithoutPermissionProvider } from "./context/withoutPermissionContext.jsx";
import SettingsPage from "./pages/settingsPage.jsx";

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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WithoutPermissionProvider>
      <RouterProvider router={router} />
    </WithoutPermissionProvider>
  </StrictMode>,
)
