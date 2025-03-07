import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Careers from '../pages/Careers';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Pricing from '../pages/Pricing';
import Privacy from '../pages/Privacy';
import SignIn from '../pages/SignIn';
import SignInSide from '../pages/SignInSide';
import SignUp from '../pages/SignUp';
import Terms from '../pages/Terms';
import Press from '../pages/Press';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-in-side',
        element: <SignInSide />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'press',
        element: <Press />,
      },
    ],
  },
]); 