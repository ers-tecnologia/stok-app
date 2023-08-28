// assets
import { EditOutlined, RedoOutlined, AlignCenterOutlined, FormOutlined } from '@ant-design/icons';

// icons
const icons = {
  EditOutlined,
  RedoOutlined,
  AlignCenterOutlined,
  FormOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Negócio',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Entrada de Itens',
      type: 'item',
      url: '/sample-page',
      icon: icons.EditOutlined
    },
    {
      id: 'saida',
      title: 'Saída de Itens',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.RedoOutlined,
      external: true,
      target: true
    },
    {
      id: 'documentation',
      title: 'Devolução de Itens',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.AlignCenterOutlined,
      external: true,
      target: true
    },
    {
      id: 'inventario',
      title: 'Inventário',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.FormOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
