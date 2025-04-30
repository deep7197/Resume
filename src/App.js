import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Resume from './components/home';
import Details from './components/details';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Resume />,
    },
    {
      path: "/Resume",
      element: <Resume />,
    },
    {
      path: "/details",
      element: <Details />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
