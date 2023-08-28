// assets
import { DashboardOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  BarChartOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navegação',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'relatorios',
      title: 'Relatórios',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
