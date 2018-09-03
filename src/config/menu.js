export const ricenoodle = [
  {
    title: '开始 Start',
    info: 'Ricenoodle，快而美的轻量级前端框架。',
    icon: '',
    key: 'start',
    link: '/ricenoodle/start',
  },
  {
    title: '样式增强 Improve',
    info: '在这一部分，Ricenoodle 重置了一些常用元素的样式，并额外添加了一些针对性很强的 CSS 类。',
    icon: '',
    key: 'improve',
    link: '/ricenoodle/improve',
    children: [
      {
        title: '代码块 Code',
        info: '为内联元素和编码块元素预设样式。',
        icon: '',
        link: '/ricenoodle/improve/code'
      },
      {
        title: '元素增强 Element',
        info: 'Ricenoodle 为部分元素的样式进行了更改和增强。',
        icon: '',
        link: '/ricenoodle/improve/element'
      },
      {
        title: '图片 Image',
        info: '为图片添加轻量类，统一图片的样式，增加响应式图片，使其不会超过父元素。',
        icon: '',
        link: '/ricenoodle/improve/image'
      },
    ],
  },
  {
    title: '实用工具 utilities',
    info: '工具类提供了一系列轻量的类，它们往往只提供了一个具体的样式。在使用过程中，通过它们不同的组合，可以实现一些复杂的样式。',
    icon: '',
    key: 'utilities',
    link: '/ricenoodle/utilities',
    children: [
      {
        title: '背景 Background',
        info: '使用背景工具类快速设置元素的背景颜色。',
        icon: '',
        link: '/ricenoodle/utilities/background'
      },
      {
        title: '边框 Border',
        info: '使用边框工具类快速设置元素的边框和边框半径的样式。 非常适合图像，按钮或任何其他元素。',
        icon: '',
        link: '/ricenoodle/utilities/border'
      },
      {
        title: '关闭图标 Close icon',
        info: '使用通用关闭图标来消除模态框和警报框等内容。',
        icon: '',
        link: '/ricenoodle/utilities/close'
      },
      {
        title: '弹性布局 Flex',
        info: '使用全套响应式弹性布局类快速管理网格列，导航，组件等的布局，对齐和大小调整。 对于更复杂的实现，可能需要自定义 CSS。',
        icon: '',
        link: '/ricenoodle/utilities/flex'
      },
      {
        title: '浮动 Float',
        info: '使用浮动类，在任何元素上切换浮动。',
        icon: '',
        link: '/ricenoodle/utilities/float'
      },
      {
        title: '字体 Font',
        info: '使用字体类快速设置文本的尺寸，权重等。',
        icon: '',
        link: '/ricenoodle/utilities/font'
      },
      {
        title: '定位 Position',
        info: '使用定位类快速配置元素的位置。',
        icon: '',
        link: '/ricenoodle/utilities/position'
      },
      {
        title: '阴影 Shadow',
        info: '使用阴影类添加或者刪除元素阴影。',
        icon: '',
        link: '/ricenoodle/utilities/shadow'
      },
      {
        title: '尺寸 Size',
        info: '使用元素尺寸类轻松设置元素的宽和高（相对于其父元素）。',
        icon: '',
        link: '/ricenoodle/utilities/size'
      },
      {
        title: '间距 Space',
        info: 'Ricenoodle 包含各种快速响应边距和填充实用类，以修改元素的外观。',
        icon: '',
        link: '/ricenoodle/utilities/space'
      },
      {
        title: '文本 Text',
        info: '<code>Text</code> 类可以快速设置文字的颜色，对齐方式，换行方式等。',
        icon: '',
        link: '/ricenoodle/utilities/text'
      },
      {
        title: '视图 View',
        info: '<code>View</code> 类可以快速设置元素的 <code>display | visibility | opacity</code> 等属性。',
        icon: '',
        link: '/ricenoodle/utilities/view'
      },
    ],
  },
  {
    title: '组件 Components',
    info: '无数可复用的组件，包括下拉菜单、导航、警告框、弹出框等更多功能。',
    icon: '',
    key: 'component',
    link: '/ricenoodle/components',
    children: [
      {
        title: '警告框 Alert',
        info: '使用少量可用且灵活的警报消息为用户操作提供上下文反馈消息。',
        icon: '',
        link: '/ricenoodle/components/alert'
      },
      {
        title: '便签 Badge',
        info: '便签组件可以用来计数或者包裹标签。',
        icon: '',
        link: '/ricenoodle/components/badge'
      },
      {
        title: '面包屑导航 Breadcrumb',
        info: '指示当前页面在导航层次结构中的位置，该位置通过 CSS 自动添加分隔符。',
        icon: '',
        link: '/ricenoodle/components/breadcrumb'
      },
      {
        title: '按钮 Button',
        info: '将 Ricenoodle 的自定义按钮用于表单，对话框等中的操作，并支持多种大小，状态等。',
        icon: '',
        link: '/ricenoodle/components/button'
      },
      {
        title: '按钮组 Button Group',
        info: '使用按钮组将一系列按钮组合在一条线上。',
        icon: '',
        link: '/ricenoodle/components/buttonGroup'
      },
      {
        title: '卡片 Card',
        info: 'Ricenoodle 的卡片提供灵活且可扩展的内容容器，具有多种变体和选项。',
        icon: '',
        link: '/ricenoodle/components/card'
      },
      {
        title: '轮播图 Carousel',
        info: '轮播图组件，用于循环播放元素图像或文本幻灯片。',
        icon: '',
        link: '/ricenoodle/components/carousel'
      },
      {
        title: '折叠 Collapse',
        info: '使用折叠组件切换项目中内容的可见性。',
        icon: '',
        link: '/ricenoodle/components/collapse'
      },
      {
        title: '分割线 Divider',
        info: '使用分割组件分割上下文。相当于 <code>&lt;hr/&gt;</code> 的升级版本。',
        icon: '',
        link: '/ricenoodle/components/divider'
      },
      {
        title: '圆点 Dot',
        info: '使用圆点组件，可以表示自定义状态。',
        icon: '',
        link: '/ricenoodle/components/dot'
      },
      {
        title: '下拉菜单 Dropdown',
        info: '使用 Ricenoodle 下拉插件切换上下文叠加以显示链接列表等。',
        icon: '',
        link: '/ricenoodle/components/dropdown'
      },
      {
        title: '精灵 Elf',
        info: '精灵组件，用于对 <code>form</code> 表单的必填项，重点项等进行增强。',
        icon: '',
        link: '/ricenoodle/components/elf'
      },
      {
        title: '表单 Form',
        info: '用于创建各种表单的表单控件样式。',
        icon: '',
        link: '/ricenoodle/components/form'
      },
      {
        title: '栅格系统 Grid',
        info: '栅格系统对于布局尤其是响应式来说至关重要，它随着屏幕或者窗口视口的大小自动调整。',
        icon: '',
        link: '/ricenoodle/components/grid'
      },
      {
        title: '输入框组 Input Group',
        info: '通过在文本输入，自定义选择和自定义文件输入的任一侧添加文本，按钮或按钮组，轻松扩展表单控件。',
        icon: '',
        link: '/ricenoodle/components/inputGroup'
      },
      {
        title: '巨幕 Jumbotron',
        info: '轻巧，灵活的大屏幕组件，用于展示醒目的内容。',
        icon: '',
        link: '/ricenoodle/components/jumbotron'
      },
      {
        title: '列表组 List Group',
        info: '列表组是用于显示一系列内容的灵活且功能强大的组件。 修改并扩展它们以支持其中的任何内容。',
        icon: '',
        link: '/ricenoodle/components/listGroup'
      },
      {
        title: '加载 Loader',
        info: '用来显示加载状态，显示为 <code>windows10</code> 的加载样式。',
        icon: '',
        link: '/ricenoodle/components/loader'
      },
      {
        title: '标记 Mark',
        info: '常用的 <code>html</code> 的转义字符。',
        icon: '',
        link: '/ricenoodle/components/mark'
      },
      {
        title: '媒体对象 Media',
        info: '这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片。',
        icon: '',
        link: '/ricenoodle/components/media'
      },
      {
        title: '模态框 Modal',
        info: '用户通知或完全自定义内容的对话框。',
        icon: '',
        link: '/ricenoodle/components/modal'
      },
      {
        title: '导航 Nav',
        info: '使用导航组件快速跳转到目标地址。',
        icon: '',
        link: '/ricenoodle/components/nav'
      },
      {
        title: '导航条 Navbar',
        info: 'Ricenoodle 的响应式导航，包括对品牌，导航等的支持，包括对折叠插件的支持。',
        icon: '',
        link: '/ricenoodle/components/navbar'
      },
      {
        title: '分页 Pagination',
        info: '对多条数据进行分页。',
        icon: '',
        link: '/ricenoodle/components/pagination'
      },
      {
        title: '弹出框 Popover',
        info: '为任意元素添加一小块浮层。',
        icon: '',
        link: '/ricenoodle/components/popover'
      },
      {
        title: '进度条 Progress',
        info: '自定义进度条，支持堆叠条，动画背景和文本标签。',
        icon: '',
        link: '/ricenoodle/components/progress'
      },
      {
        title: '滚动监听 Scrollspy',
        info: '根据滚动位置自动更新导航，以指示视口中当前处于活动状态的链接。',
        icon: '',
        link: '/ricenoodle/components/scrollspy'
      },
      {
        title: '表格 Table',
        info: '表格适用于数据的展示。',
        icon: '',
        link: '/ricenoodle/components/table'
      },
      {
        title: '提示框 Tooltip',
        info: '采用 CSS3 制作动画，用 <code>data-</code> 存储相关数据。',
        icon: '',
        link: '/ricenoodle/components/tooltip'
      },
    ],
  },
];
