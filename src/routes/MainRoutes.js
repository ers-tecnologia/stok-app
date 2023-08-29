import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const RegisterStock = Loadable(lazy(() => import('pages/components-overview/RegisterStock')));
const RegisterCategory = Loadable(lazy(() => import('pages/components-overview/RegisterCategory')));
const RegisterRequester = Loadable(lazy(() => import('pages/components-overview/RegisterRequester')));
const RegisterProduct = Loadable(lazy(() => import('pages/components-overview/RegisterProduct')));
const RegisterUser = Loadable(lazy(() => import('pages/components-overview/RegisterUser')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'cadastro-categoria',
      element: <RegisterCategory />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'cadastro-produto',
      element: <RegisterProduct />
    },
    {
      path: 'cadastro-estoque',
      element: <RegisterStock />
    },
    {
      path: 'cadastro-solicitante',
      element: <RegisterRequester />
    },
    {
      path: 'cadastro-usuario',
      element: <RegisterUser />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
