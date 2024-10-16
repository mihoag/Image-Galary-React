import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'; // Importing necessary functions and components from react-router-dom
import PhotoList from '../page/PhotoList'; // Importing PhotoList component
import PhotoDetail from '../page/PhotoDetail'; // Importing PhotoDetail component
import HomePage from '../page/HomePage'; // Importing HomePage component
import SettingPage from '../page/SettingPage'; // Importing SettingPage component
import MainLayout from '../layouts/MainLayout'; // Importing MainLayout component
import NotFoundPage from '../page/NotFoundPage'; // Importing NotFoundPage component

// Creating a router instance using createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}> {/* Main route with MainLayout as the root component */}
      <Route index element={<HomePage />} /> {/* Default route for the home page */}
      <Route path="photos"> {/* Nested route for photos */}
        <Route index element={<PhotoList />} /> {/* Route for the photo list */}
        <Route path=":id" element={<PhotoDetail/>} /> {/* Route for photo details with dynamic id */}
      </Route>
      <Route path="setting" element={<SettingPage />} /> {/* Route for the settings page */}
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for all other paths, renders NotFoundPage */}
    </Route>,
  ),
);

export default router; // Exporting the router instance as the default export
