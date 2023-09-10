import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const ItemsInput = Loadable(lazy(() => import('pages/extra-pages/ItemsInput')));
const StockList = Loadable(lazy(() => import('pages/extra-pages/StockList')));
const ListCategory = Loadable(lazy(() => import('pages/extra-pages/ListCategory')));
const ProductList = Loadable(lazy(() => import('pages/extra-pages/ProductList')));
const RequesterList = Loadable(lazy(() => import('pages/extra-pages/RequesterList')));
const UserList = Loadable(lazy(() => import('pages/extra-pages/UserList')));

// render - utilities
const RegisterStock = Loadable(lazy(() => import('pages/components-overview/RegisterStock')));
const RegisterCategory = Loadable(lazy(() => import('pages/components-overview/RegisterCategory')));
const RegisterRequester = Loadable(lazy(() => import('pages/components-overview/RegisterRequester')));
const RegisterProduct = Loadable(lazy(() => import('pages/components-overview/RegisterProduct')));
const RegisterUser = Loadable(lazy(() => import('pages/components-overview/RegisterUser')));
const ReturnItens = Loadable(lazy(() => import('pages/components-overview/ReturnItens')));
const Inventory = Loadable(lazy(() => import('pages/components-overview/Inventory')));
const OutputItems = Loadable(lazy(() => import('pages/components-overview/OutputItems')));
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
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    //estoque
    {
      path: 'lista-estoque',
      element: <StockList />
    },
    {
      path: 'cadastro-estoque',
      element: <RegisterStock />
    },
    //categoria
    {
      path: 'lista-categoria',
      element: <ListCategory />
    },
    {
      path: 'cadastro-categoria',
      element: <RegisterCategory />
    },
    //produto
    {
      path: 'lista-produto',
      element: <ProductList />
    },
    {
      path: 'cadastro-produto',
      element: <RegisterProduct />
    },
    //solicitante
    {
      path: 'lista-solicitante',
      element: <RequesterList />
    },
    {
      path: 'cadastro-solicitante',
      element: <RegisterRequester />
    },
    //usuario
    {
      path: 'lista-usuario',
      element: <UserList />
    },
    {
      path: 'cadastro-usuario',
      element: <RegisterUser />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'devolucao-itens',
      element: <ReturnItens />
    },
    {
      path: 'inventario',
      element: <Inventory />
    },
    {
      path: 'entrada-itens',
      element: <ItemsInput />
    },
    {
      path: 'saida-itens',
      element: <OutputItems />
    }
  ]
};

export default MainRoutes;
