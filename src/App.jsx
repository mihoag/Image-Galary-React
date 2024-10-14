
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import PhotoList from './page/PhotoList';
import PhotoDetail from './page/PhotoDetail';
import HomePage from './page/HomePage';
import './App.css';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './page/NotFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/photos' element={<PhotoList />} />
        <Route
          path='/photos/:id'
          element={<PhotoDetail/>}
        />
         <Route path='*' element={<NotFoundPage />} />
      </Route>
      
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
