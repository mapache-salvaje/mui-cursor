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
import SeriesBFunding from '../pages/press/series-b-funding';
import EnterpriseSuite from '../pages/press/enterprise-suite';
import GlobalPartnership from '../pages/press/global-partnership';

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
      {
        path: 'press/series-b-funding',
        element: <SeriesBFunding />,
      },
      {
        path: 'press/enterprise-suite',
        element: <EnterpriseSuite />,
      },
      {
        path: 'press/global-partnership',
        element: <GlobalPartnership />,
      },
    ],
  },
]); 