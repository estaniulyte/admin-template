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
    href: '/',
  },
  {
    id: 2,
    name: 'Lab Test',
    icon: labTest,
    href: '/lab-test',
  },
  {
    id: 3,
    name: 'Appointment',
    icon: appointment,
    href: '/appointment',
  },
  {
    id: 4,
    name: 'Medicine Order',
    icon: medicine,
    href: '/medicine-order',
  },
  {
    id: 5,
    name: 'Message',
    icon: message,
    href: '/message',
  },
  {
    id: 6,
    name: 'Payment',
    icon: payment,
    href: '/payment',
  },
  {
    id: 7,
    name: 'Settings',
    icon: settings,
    href: '/settings',
  },
];
