import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  FileImageOutlined,
  GiftOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileDoneOutlined,

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
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/home/main/orders`,
        title: 'orders',
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/home/main/clients`,
        title: 'clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'clients_list',
            path: `${APP_PREFIX_PATH}/home/main/clients/clients_list`,
            title: 'clients_list',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'clients_group',
            path: `${APP_PREFIX_PATH}/home/main/clients/clients_group`,
            title: 'clients_group',
            breadcrumb: true,
            submenu: []
          },
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/home/main/banners`,
        title: 'banners',
        icon: FileImageOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'promo_codes',
        path: `${APP_PREFIX_PATH}/home/main/promo_codes`,
        title: 'promo_codes',
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'offline_points',
        path: `${APP_PREFIX_PATH}/home/main/offline_points`,
        title: 'offline_points',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'adresses',
            path: `${APP_PREFIX_PATH}/home/main/clients/adresses`,
            title: 'adresses',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'geofences',
            path: `${APP_PREFIX_PATH}/home/main/clients/geofences`,
            title: 'geofences',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'staff',
        path: `${APP_PREFIX_PATH}/home/main/staff`,
        title: 'staff',
        icon: TeamOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'mailing',
        path: `${APP_PREFIX_PATH}/home/main/mailing`,
        title: 'mailing',
        icon: MailOutlined,
        breadcrumb: true,
        submenu: []
      }
    ],
  },
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/home/system`,
    title: 'system',
    breadcrumb: true,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/home/system/settings`,
        title: 'settings',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'mobile_app',
        path: `${APP_PREFIX_PATH}/home/system/mobile_app`,
        title: 'mobile_app',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/home/system/logs`,
        title: 'logs',
        icon: FileDoneOutlined,
        breadcrumb: true,
        submenu: []
      },
    ]
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
