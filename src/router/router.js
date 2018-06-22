import {
  Gate,
  Ricenoodle,
  Introduce,
  Start,
  Utilities,
  Background,
  Border,
  Flex,
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
  {
    path: '/ricenoodle/utilities/flex',
    exact: true,
    component: Flex,
  },
];

export default router;
