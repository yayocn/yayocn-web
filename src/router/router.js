import {
  Gate,
  Ricenoodle,
} from '../view';

const router = [
  {
    path: '/',
    exact: true,
    component: Gate,
  },
  {
    path: '/ricenoodle',
    component: Ricenoodle,
  },
];

export default router;
