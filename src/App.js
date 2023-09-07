import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Item from './Components/Item';
import Home from './Components/Home';
import Element from './Element';
import ErrorPage from './Components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'item',
          children: [
            { index: true, element: <Item /> },
            { path: ':id', element: <Element /> },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
