import { theme } from '../styles/theme';
import dashboard from '../assets/images/dashboard-icon1.svg';
import user from '../assets/images/user-icon.svg';
import statistics from '../assets/images/statistics-icon.svg';
import settings from '../assets/images/settings-icon.svg';

export const links = [
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: dashboard,
  },
  {
    path: '/my-issues',
    name: 'my issues',
    icon: user,
  },
  {
    path: '/statistics',
    name: 'statistics',
    icon: statistics,
  },
  {
    path: '/settings',
    name: 'settings',
    icon: settings,
  },
];

export const lists = [
  {
    text: 'to do',
    color: theme.primaryBlue,
  },
  {
    text: 'in progress',
    color: theme.primaryOrange,
  },
  {
    text: 'done',
    color: theme.primaryGreen,
  },
];
