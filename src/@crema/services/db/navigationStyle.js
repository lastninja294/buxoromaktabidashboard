import {
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeMode,
} from '../../../shared/constants/AppEnums';

export const navStyles = [
  {
    id: 1,
    alias: NavStyle.DEFAULT,
    image: '/assets/images/navigationStyle/default.svg',
  },

  {
    id: 6,
    alias: NavStyle.MINI_SIDEBAR_TOGGLE,
    image: '/assets/images/navigationStyle/mini-sidebar-toggle.svg',
  },
];

export const sidebarBgImages = [
  {
    id: 3,
    image: '/assets/images/sidebar/thumb/3.png',
  },
  {
    id: 4,
    image: '/assets/images/sidebar/thumb/4.png',
  },
];

export const menuStyles = [
  {
    id: 1,
    alias: MenuStyle.DEFAULT,
    image: '/assets/images/sidebar/menu/1.svg',
  },

  {
    id: 3,
    alias: MenuStyle.ROUNDED,
    image: '/assets/images/sidebar/menu/3.svg',
  },
];

export const sidebarColors = [
  {
    id: 3,
    sidebarBgColor: '#fff',
    sidebarTextColor: 'rgba(0, 0, 0, 0.87)',
    sidebarHeaderColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.LIGHT,
  },

  {
    id: 16,
    sidebarBgColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarHeaderColor: '#313541',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },
];

export const layoutTypes = [
  {
    id: 1,
    alias: LayoutType.FULL_WIDTH,
    image: '/assets/images/layouts/full-width.svg',
  },
  {
    id: 2,
    alias: LayoutType.BOXED,
    image: '/assets/images/layouts/boxed.svg',
  },
];
