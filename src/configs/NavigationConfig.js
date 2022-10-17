import {
  DashboardOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/home/main`,
    title: 'main',
    breadcrumb: true,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/home/main/dashboard`,
        title: 'dashboard',
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/home/main/catalog`,
        title: 'catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'products',
            path: `${APP_PREFIX_PATH}/home/main/catalog/products`,
            title: 'products',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/home/main/catalog/categories`,
            title: 'categories',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/home/main/catalog/collections`,
            title: 'collections',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/home/main/catalog/combo`,
            title: 'combo',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
    ],
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
