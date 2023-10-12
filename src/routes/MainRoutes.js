import { lazy } from 'react';

// Componentes Loadable para páginas
import Loadable from 'components/Loadable';

// Layout principal
import MainLayout from 'layout/MainLayout';

// Componentes de páginas
import ItemsInputList from 'pages/extra-pages/ItemsInputList';
import OutputItemsList from 'pages/extra-pages/OutputItemsList';
import ReturnItensList from 'pages/extra-pages/ReturnItensList';

// Páginas do Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// Componentes de páginas para estoque, categoria, produto, etc.
const ItemsInput = Loadable(lazy(() => import('pages/extra-pages/ItemsInput')));
const StockList = Loadable(lazy(() => import('pages/extra-pages/StockList')));
const ListCategory = Loadable(lazy(() => import('pages/extra-pages/ListCategory')));
const ProductList = Loadable(lazy(() => import('pages/extra-pages/ProductList')));
const RequesterList = Loadable(lazy(() => import('pages/extra-pages/RequesterList')));
const UserList = Loadable(lazy(() => import('pages/extra-pages/UserList')));

// Componentes de utilitários
const RegisterStock = Loadable(lazy(() => import('pages/components-overview/RegisterStock')));
const RegisterCategory = Loadable(lazy(() => import('pages/components-overview/RegisterCategory')));
const RegisterRequester = Loadable(lazy(() => import('pages/components-overview/RegisterRequester')));
const RegisterProduct = Loadable(lazy(() => import('pages/components-overview/RegisterProduct')));
const RegisterUser = Loadable(lazy(() => import('pages/components-overview/RegisterUser')));
const ReturnItens = Loadable(lazy(() => import('pages/components-overview/ReturnItens')));
const Inventory = Loadable(lazy(() => import('pages/components-overview/Inventory')));
const OutputItems = Loadable(lazy(() => import('pages/components-overview/OutputItems')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// Rotas principais
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
    {
      path: 'lista-estoque',
      element: <StockList />
    },
    {
      path: 'cadastro-estoque',
      element: <RegisterStock />
    },
    {
      path: 'cadastro-estoque/:id',
      element: <RegisterStock />
    },
    {
      path: 'lista-categoria',
      element: <ListCategory />
    },
    {
      path: 'cadastro-categoria',
      element: <RegisterCategory />
    },
    {
      path: 'cadastro-categoria/:id',
      element: <RegisterCategory />
    },
    {
      path: 'lista-produto',
      element: <ProductList />
    },
    {
      path: 'cadastro-produto',
      element: <RegisterProduct />
    },
    {
      path: 'cadastro-produto/:id',
      element: <RegisterProduct />
    },
    {
      path: 'lista-solicitante',
      element: <RequesterList />
    },
    {
      path: 'cadastro-solicitante',
      element: <RegisterRequester />
    },
    {
      path: 'cadastro-solicitante/:id',
      element: <RegisterRequester />
    },
    {
      path: 'lista-usuario',
      element: <UserList />
    },
    {
      path: 'cadastro-usuario',
      element: <RegisterUser />
    },
    {
      path: 'cadastro-usuario/:id',
      element: <RegisterUser />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'lista-entrada-itens',
      element: <ItemsInputList />
    },
    {
      path: 'entrada-itens',
      element: <ItemsInput />
    },
    {
      path: 'entrada-itens/:id',
      element: <ItemsInput />
    },
    {
      path: 'lista-saida-itens',
      element: <OutputItemsList />
    },
    {
      path: 'saida-itens',
      element: <OutputItems />
    },
    {
      path: 'saida-itens/:id',
      element: <OutputItems />
    },
    {
      path: 'lista-devolucao-itens',
      element: <ReturnItensList />
    },
    {
      path: 'devolucao-itens',
      element: <ReturnItens />
    },
    {
      path: 'devolucao-itens/:id',
      element: <ReturnItens />
    },
    {
      path: 'inventario',
      element: <Inventory />
    }
  ]
};

export default MainRoutes;
