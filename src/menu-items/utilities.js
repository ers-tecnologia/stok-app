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
      id: 'util-typography',
      title: 'Estoque',
      type: 'item',
      url: '/typography',
      icon: icons.DropboxOutlined
    },
    {
      id: 'util-color',
      title: 'Categoria',
      type: 'item',
      url: '/color',
      icon: icons.ApartmentOutlined
    },
    {
      id: 'util-shadow',
      title: 'Produto',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'util-shadow',
      title: 'Solicitante',
      type: 'item',
      url: '/shadow',
      icon: icons.UserOutlined
    }
  ]
};

export default utilities;
