
// Routing
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ProjectDetails from "./pages/ProjectDetails";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <MainLayout />, 
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "projects", element: <ProjectDetails /> },
      { path: "project/:id", element: <ProjectDetails /> },
    ],
  },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <LoginPage /> },
]);
