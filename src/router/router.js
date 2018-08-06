import {
  Gate,
  Ricenoodle,
  Introduce,
  Start,
  Utilities,
  Background,
  Border,
  Close,
  Flex,
  Float,
  Font,
  Position,
  Shadow,
  Size,
  Space,
  Text,
  View,
  Components,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Carousel,
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
    path: '/ricenoodle/utilities/close',
    exact: true,
    component: Close,
  },
  {
    path: '/ricenoodle/utilities/flex',
    exact: true,
    component: Flex,
  },
  {
    path: '/ricenoodle/utilities/float',
    exact: true,
    component: Float,
  },
  {
    path: '/ricenoodle/utilities/font',
    exact: true,
    component: Font,
  },
  {
    path: '/ricenoodle/utilities/position',
    exact: true,
    component: Position,
  },
  {
    path: '/ricenoodle/utilities/shadow',
    exact: true,
    component: Shadow,
  },
  {
    path: '/ricenoodle/utilities/size',
    exact: true,
    component: Size,
  },
  {
    path: '/ricenoodle/utilities/space',
    exact: true,
    component: Space,
  },
  {
    path: '/ricenoodle/utilities/text',
    exact: true,
    component: Text,
  },
  {
    path: '/ricenoodle/utilities/view',
    exact: true,
    component: View,
  },
  {
    path: '/ricenoodle/components',
    exact: true,
    component: Components,
  },
  {
    path: '/ricenoodle/components/alert',
    exact: true,
    component: Alert,
  },
  {
    path: '/ricenoodle/components/badge',
    exact: true,
    component: Badge,
  },
  {
    path: '/ricenoodle/components/breadcrumb',
    exact: true,
    component: Breadcrumb,
  },
  {
    path: '/ricenoodle/components/button',
    exact: true,
    component: Button,
  },
  {
    path: '/ricenoodle/components/buttonGroup',
    exact: true,
    component: ButtonGroup,
  },
  {
    path: '/ricenoodle/components/card',
    exact: true,
    component: Card,
  },
  {
    path: '/ricenoodle/components/carousel',
    exact: true,
    component: Carousel,
  },
];

export default router;
