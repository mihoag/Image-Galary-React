
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import PhotoList from './page/PhotoList';
import PhotoDetail from './page/PhotoDetail';
import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<PhotoList />} />
        <Route path='/photos' element={<PhotoList />} />
        <Route
          path='/photos/:id'
          element={<PhotoDetail/>}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;