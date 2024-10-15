import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import PhotoList from './page/PhotoList';
import PhotoDetail from './page/PhotoDetail';
import HomePage from './page/HomePage';
import SettingPage from './page/SettingPage';
import './App.css';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './page/NotFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="photos">
          <Route index element={<PhotoList />} />
          <Route path=":id" element={<PhotoDetail />} />
        </Route>
        <Route path='setting' element={<SettingPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for all other paths */}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
