export const menu = [
  {
    title: '简介',
    icon: '',
    key: 'introduce',
    link: '/introduce',
  },
  {
    title: '开始',
    icon: '',
    key: 'start',
    link: '/start',
  },
  {
    title: '实用工具',
    icon: '',
    key: 'utilities',
    link: '/utiliies',
    children: [
      {
        title: 'Border',
        icon: '',
        link: '/utiliies/border'
      },
      {
        title: 'Font',
        icon: '',
        link: '/utiliies/font'
      },
      {
        title: 'Position',
        icon: '',
        link: '/utiliies/position'
      },
      {
        title: 'Text',
        icon: '',
        link: '/utiliies/text'
      },
    ],
  },
  {
    title: '组件',
    icon: '',
    key: 'component',
    link: '/components',
    children: [
      {
        title: 'Dropdown',
        icon: '',
        link: '/components/dropdown'
      },
      {
        title: 'Alert',
        icon: '',
        link: '/components/alert'
      },
      {
        title: 'Modal',
        icon: '',
        link: '/components/modal'
      },
    ],
  },
];
