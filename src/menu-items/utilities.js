// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  ApartmentOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  DropboxOutlined,
  UserOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  ApartmentOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  DropboxOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //
ApartmentOutlined;
const utilities = {
  id: 'utilities',
  title: 'Cadastro',
  type: 'group',
  children: [
    {
      id: 'util-stock',
      title: 'Estoque',
      type: 'item',
      url: '/cadastro-estoque',
      icon: icons.DropboxOutlined
    },
    {
      id: 'util-category',
      title: 'Categoria',
      type: 'item',
      url: '/cadastro-categoria',
      icon: icons.ApartmentOutlined
    },
    {
      id: 'util-produto',
      title: 'Produto',
      type: 'item',
      url: '/cadastro-produto',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'util-solicitante',
      title: 'Solicitante',
      type: 'item',
      url: '/cadastro-solicitante',
      icon: icons.UserOutlined
    },
    {
      id: 'util-usuario',
      title: 'Usuário',
      type: 'item',
      url: '/cadastro-usuario',
      icon: icons.UserOutlined
    }
  ]
};

export default utilities;
