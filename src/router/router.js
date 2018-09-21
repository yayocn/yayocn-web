import {
  Gate,
  Ricenoodle,
  Aboutme,
} from '../view';



import { Start } from '../view/ricenoodle/containers/start';
import { Improve, Code, Element, Image } from '../view/ricenoodle/containers/improve';

import {
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
} from '../view/ricenoodle/containers/utilities';

import {
  Components,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Collapse,
  Divider,
  Dot,
  Dropdown,
  Elf,
  Form,
  Grid,
  InputGroup,
  Jumbotron,
  ListGroup,
  Loader,
  Mark,
  Media,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Popover,
  Progress,
  Scrollspy,
  Table,
  Tooltip,
} from '../view/ricenoodle/containers/components';

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
    path: '/ricenoodle/start',
    exact: true,
    component: Start,
  },
  {
    path: '/ricenoodle/improve',
    exact: true,
    component: Improve,
  },
  {
    path: '/ricenoodle/improve/code',
    exact: true,
    component: Code,
  },
  {
    path: '/ricenoodle/improve/element',
    exact: true,
    component: Element,
  },
  {
    path: '/ricenoodle/improve/image',
    exact: true,
    component: Image,
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
  {
    path: '/ricenoodle/components/collapse',
    exact: true,
    component: Collapse,
  },
  {
    path: '/ricenoodle/components/divider',
    exact: true,
    component: Divider,
  },
  {
    path: '/ricenoodle/components/dot',
    exact: true,
    component: Dot,
  },
  {
    path: '/ricenoodle/components/dropdown',
    exact: true,
    component: Dropdown,
  },
  {
    path: '/ricenoodle/components/elf',
    exact: true,
    component: Elf,
  },
  {
    path: '/ricenoodle/components/form',
    exact: true,
    component: Form,
  },
  {
    path: '/ricenoodle/components/grid',
    exact: true,
    component: Grid,
  },
  {
    path: '/ricenoodle/components/inputGroup',
    exact: true,
    component: InputGroup,
  },
  {
    path: '/ricenoodle/components/jumbotron',
    exact: true,
    component: Jumbotron,
  },
  {
    path: '/ricenoodle/components/listGroup',
    exact: true,
    component: ListGroup,
  },
  {
    path: '/ricenoodle/components/loader',
    exact: true,
    component: Loader,
  },
  {
    path: '/ricenoodle/components/mark',
    exact: true,
    component: Mark,
  },
  {
    path: '/ricenoodle/components/media',
    exact: true,
    component: Media,
  },
  {
    path: '/ricenoodle/components/modal',
    exact: true,
    component: Modal,
  },
  {
    path: '/ricenoodle/components/nav',
    exact: true,
    component: Nav,
  },
  {
    path: '/ricenoodle/components/navbar',
    exact: true,
    component: Navbar,
  },
  {
    path: '/ricenoodle/components/pagination',
    exact: true,
    component: Pagination,
  },
  {
    path: '/ricenoodle/components/popover',
    exact: true,
    component: Popover,
  },
  {
    path: '/ricenoodle/components/progress',
    exact: true,
    component: Progress,
  },
  {
    path: '/ricenoodle/components/scrollspy',
    exact: true,
    component: Scrollspy,
  },
  {
    path: '/ricenoodle/components/table',
    exact: true,
    component: Table,
  },
  {
    path: '/ricenoodle/components/tooltip',
    exact: true,
    component: Tooltip,
  },
  {
    path: '/aboutme',
    exact: true,
    component: Aboutme,
  },
];

export default router;
