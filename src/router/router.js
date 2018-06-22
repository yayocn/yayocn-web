import {
  Gate,
  Ricenoodle,
  Introduce,
  Start,
  Utilities,
  Background,
  Border,
} from '../view';

const router = [
  {
    path: '/',
    exact: true,
    component: Gate,
  },
  {
    path: '/ricenoodle',
    exact: true,
    component: Ricenoodle,
  },
  {
    path: '/ricenoodle/introduce',
    exact: true,
    component: Introduce,
  },
  {
    path: '/ricenoodle/start',
    exact: true,
    component: Start,
  },
  {
    path: '/ricenoodle/utilities',
    exact: true,
    component: Utilities,
  },
  {
    path: '/ricenoodle/utilities/background',
    exact: true,
    component: Background,
  },
  {
    path: '/ricenoodle/utilities/border',
    exact: true,
    component: Border,
  },
];

export default router;
