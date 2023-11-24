import {
  appointment,
  dashboard,
  labTest,
  medicine,
  message,
  payment,
  settings,
} from './iconPaths';

export const drawerMenu = [
  {
    id: 1,
    name: 'Dashboard',
    icon: dashboard,
    isActive: true,
    href: '/',
  },
  {
    id: 2,
    name: 'Lab Test',
    icon: labTest,
    isActive: false,
    href: '/lab-test',
  },
  {
    id: 3,
    name: 'Appointment',
    icon: appointment,
    isActive: false,
    href: '/appointment',
  },
  {
    id: 4,
    name: 'Medicine Order',
    icon: medicine,
    isActive: false,
    href: '/medicine-order',
  },
  {
    id: 5,
    name: 'Message',
    icon: message,
    isActive: false,
    href: '/message',
  },
  {
    id: 6,
    name: 'Payment',
    icon: payment,
    isActive: false,
    href: '/payment',
  },
  {
    id: 7,
    name: 'Settings',
    icon: settings,
    isActive: false,
    href: '/settings',
  },
];
