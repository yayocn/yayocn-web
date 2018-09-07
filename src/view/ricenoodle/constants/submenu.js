const submenu = {
  start: [
    { key: 'download', title: '下载', },
    { key: 'use', title: '使用', children: [{ key: 'use_local', title: '使用本地文件' }, { key: 'use_npm', title: 'NPM' }] },
  ],
  code: [
    { key: 'code', title: '内联编码' },
    { key: 'pre', title: '编码块' },
    { key: 'input', title: '用户输入' },
    { key: 'samp', title: '<samp> 元素' },
  ],
  element: [
    { key: 'heading', title: '标题' },
    { key: 'hr', title: '水平分割线' },
    { key: 'small', title: '<small> 元素' },
    { key: 'mark', title: '<mark> 元素' },
    { key: 'address', title: '<address> 元素' },
    { key: 'blockquote', title: '<blockquote> 元素', children: [{ key: 'blockquote_right', title: '右侧引用' }] },
    { key: 'dl', title: '<dl> 元素' },
    { key: 'size_dead', title: '禁止缩放' },
    { key: 'list', title: '列表', children: [{ key: 'list_inline', title: '内联列表' }, { key: 'list_bare', title: '无样式列表' }] },
  ],
  image: [
    { key: 'fluid', title: '响应式' },
    { key: 'thumbnail', title: '缩略图' },
    { key: 'figure', title: '<figure> 元素' },
    { key: 'extro', title: '扩展' },
  ],
  background: [
    { key: 'theme', title: '主题' },
  ],
  border: [
    { key: 'border', title: '边框', children: [{ key: 'border_additive', title: '添加' }, { key: 'border_subtractive', title: '删除' },] },
    { key: 'theme', title: '主题' },
    { key: 'radius', title: '半径' },
    { key: 'style', title: '边框风格' },
    { key: 'width', title: '边框宽度' },
  ],
  close: [
    { key: 'icon', title: '图标' },
    { key: 'button', title: '按钮' },
  ],
  flex: [
    { key: 'direction', title: '方向', children: [{ key: 'direction_row', title: '水平向右' }, { key: 'direction_row_reverse', title: '水平向左' }, { key: 'direction_column', title: '垂直向下' }, { key: 'direction_column_reverse', title: '垂直向上' }] },
    { key: 'wrap', title: '换行', children: [{ key: 'wrap_nowrap', title: '不换行' }, { key: 'wrap_wrap', title: '换行' }, { key: 'wrap_reverse', title: '换行反转' }] },
    { key: 'justify', title: '主轴对齐', children: [{ key: 'justify_start', title: 'Start' }, { key: 'justify_end', title: 'End' }, { key: 'justify_center', title: 'Center' }, { key: 'justify_between', title: 'Between' }, { key: 'justify_around', title: 'Around' }] },
    { key: 'align_items', title: '交叉轴对齐', children: [{ key: 'align_items_start', title: 'Start' }, { key: 'align_items_end', title: 'End' }, { key: 'align_items_center', title: 'Center' }, { key: 'align_items_baseline', title: 'Baseline' }, { key: 'align_items_stretch', title: 'Stretch' }] },
    { key: 'align_content', title: '多轴对齐', children: [{ key: 'align_content_start', title: 'Start' }, { key: 'align_content_end', title: 'End' }, { key: 'align_content_center', title: 'Center' }, { key: 'align_content_between', title: 'Between' }, { key: 'align_content_around', title: 'Around' }, { key: 'align_content_stretch', title: 'Stretch' }] },
    { key: 'align_self', title: '特殊对齐', children: [{ key: 'align_self_auto', title: 'Auto' }, { key: 'align_self_start', title: 'Start' }, { key: 'align_self_end', title: 'End' }, { key: 'align_self_center', title: 'Center' }, { key: 'align_self_baseline', title: 'Baseline' }, { key: 'align_self_stretch', title: 'Stretch' }] },
  ],
  float: [
    { key: 'float', title: '设置浮动' },
    { key: 'clearfix', title: '清除浮动' },
  ],
  font: [
    { key: 'size', title: '尺寸', children: [{ key: 'size_stable', title: '固定尺寸' }, { key: 'size_multiple', title: '成倍尺寸' }] },
    { key: 'weight', title: '权重'},
  ],
  position: [
    { key: 'type', title: '种类',},
    { key: 'position', title: '位置', children: [{ key: 'position_hc', title: '水平居中' }, { key: 'position_vc', title: '垂直居中' }, { key: 'position_center', title: '水平垂直居中' }, { key: 'position_top', title: '居于顶部' }, { key: 'position_right', title: '居于右侧' }, { key: 'position_bottom', title: '居于底部' }, { key: 'position_left', title: '居于左侧' }, { key: 'position_full', title: '填充' }] },
  ],
  shadow: [
    { key: 'visibility', title: '阴影', children: [{ key: 'visibility_shadow', title: '显示' }, { key: 'visibility_none', title: '清除' }] },
    { key: 'size', title: '尺寸', children: [{ key: 'size_small', title: 'Small' }, { key: 'size_large', title: 'Large' }] },
  ],
  size: [
    { key: 'width', title: '宽度' },
    { key: 'height', title: '高度' },
    { key: 'max', title: '最大值', children: [{ key: 'max_width', title: '最大宽度' }, { key: 'max_height', title: '最大高度' }] },
    { key: 'full', title: '视口高度' },
  ],
  space: [
    { key: 'format', title: '格式' },
    { key: 'example', title: '实例' },
  ],
  text: [
    { key: 'theme', title: '主题' },
    { key: 'alignment', title: '对齐' },
    { key: 'wrap', title: '换行' },
    { key: 'transform', title: '变形' },
    { key: 'font', title: '字体' },
  ],
  view: [
    { key: 'display', title: '显示类型' },
    { key: 'hidden', title: 'Hidden' },
    { key: 'visibility', title: 'Visibility' },
    { key: 'opacity', title: '不透明度' },
  ],
  alert: [
    { key: 'theme', title: '主题' },
    { key: 'link_color', title: '锚点' },
    { key: 'dismissing', title: '可关闭的警告框', children: [{ key: 'use_code', title: '使用 &time;' }, { key: 'use_mark', title: '使用 mark-close' }, { key: 'event', title: '事件' },] },
    { key: 'additional', title: '附加内容' },
  ],
  badge: [
    { key: 'theme', title: '主题' },
    { key: 'link', title: '锚点' },
    { key: 'pill', title: '胶囊' },
  ],
  breadcrumb: [
    { key: 'example', title: '实例' },
    { key: 'disabled', title: '禁用项' },
  ],
  button: [
    { key: 'theme', title: '主题' },
    { key: 'outline', title: '轮廓按钮' },
    { key: 'link', title: '锚点' },
    { key: 'size', title: '尺寸' },
    { key: 'round', title: '半径' },
    { key: 'block', title: '块级按钮' },
  ],
  buttonGroup: [
    { key: 'default', title: '实例' },
    { key: 'size', title: '尺寸' },
    { key: 'block', title: '按钮组块' },
    { key: 'dropdown', title: '嵌套下拉框' },
    { key: 'vt', title: '垂直按钮组' },
  ],
  card: [
    { key: 'default', title: '实例' },
    { key: 'image', title: '图片' },
    { key: 'link', title: '锚点' },
    { key: 'head_foot', title: '头部和底部' },
    { key: 'theme', title: '主题' },
    { key: 'group', title: '卡片组' },
    { key: 'deck', title: '分开的卡片组' },
    { key: 'column', title: '自动分列的卡片组' },
  ],
  carousel: [
    { key: 'prepare', title: '前奏' },
    { key: 'example', title: '实例' },
    { key: 'fade', title: '淡入淡出' },
    { key: 'event', title: '事件' },
  ],
  collapse: [
    { key: 'prepare', title: '前奏' },
    { key: 'example', title: '实例' },
    { key: 'event', title: '事件' },
  ],
  divider: [
    { key: 'example', title: '实例' },
    { key: 'size', title: '尺寸' },
    { key: 'weight', title: '权重' },
    { key: 'theme', title: '主题' },
  ],
  dot: [
    { key: 'example', title: '实例' },
    { key: 'theme', title: '主题' },
  ],
  dropdown: [
    { key: 'prepare', title: '前奏' },
    { key: 'example', title: '实例' },
    { key: 'theme', title: '主题' },
    { key: 'group', title: '组合' },
    { key: 'size', title: '尺寸' },
    { key: 'position', title: '位置' },
    { key: 'menu', title: '菜单', children: [{ key: 'menu_active', title: '激活状态' }, { key: 'menu_disabled', title: '禁用状态' }, { key: 'menu_align', title: '对齐' }, { key: 'menu_subtitle', title: '子标题' }, { key: 'menu_divider', title: '分割线' }, { key: 'menu_text', title: '文本内容' }, { key: 'menu_form', title: '表单' }, { key: 'menu_offset', title: '偏移' },] },
    { key: 'event', title: '事件' },
  ],
  elf: [
    { key: 'example', title: '实例' },
    { key: 'theme', title: '主题' },
    { key: 'position', title: '位置' },
  ],
  form: [
    { key: 'example', title: '实例' },
    { key: 'input', title: '用户输入', children: [{ key: 'input_control', title: '.form-control' }, { key: 'input_size', title: '尺寸' }, { key: 'input_state', title: '输入状态' }, { key: 'input_disabled', title: '禁用' }] },
    { key: 'checkbox', title: '复选框', children: [{ key: 'checkbox_inline', title: '行内复选框' }, { key: 'checkbox_disabled', title: '禁用状态' }, { key: 'checkbox_switch', title: '开关' }, { key: 'checkbox_switch_size', title: '开关尺寸' }, { key: 'checkbox_switch_disabled', title: '开关禁用' }] },
    { key: 'radio', title: '单选框', children: [{ key: 'radio_inline', title: '行内单选框' }, { key: 'radio_disabled', title: '禁用状态' }] },
    { key: 'file', title: '文件上传' },
    { key: 'group', title: '表单组' },
    { key: 'form_hz', title: '水平表单' },
    { key: 'form_inline', title: '行表单' },
  ],
  grid: [
    { key: 'introduce', title: '简介' },
    { key: 'example', title: '实例' },
    { key: 'param', title: '参数' },
    { key: 'flex', title: '弹性布局' },
    { key: 'nogutter', title: '删除列内边距' },
    { key: 'order', title: '排序' },
    { key: 'offset', title: '偏移量' },
  ],
  inputGroup: [
    { key: 'example', title: '实例' },
    { key: 'theme', title: '主题' },
    { key: 'size', title: '尺寸' },
    { key: 'border', title: '边框' },
    { key: 'dropdown', title: '下拉框' },
  ],
  jumbotron: [
    { key: 'example', title: '实例' },
    { key: 'fluid', title: '响应式' },
  ],
  listGroup: [
    { key: 'example', title: '实例', children: [{ key: 'example_active', title: '激活' }, { key: 'example_disabled', title: '禁用' },] },
    { key: 'flush', title: '无外边框' },
    { key: 'noborder', title: '无边框' },
    { key: 'link', title: '链接' },
    { key: 'theme', title: '主题' },
    { key: 'content', title: '内容' },
  ],
  loader: [
    { key: 'bar', title: 'Bar', children: [{ key: 'bar_theme', title: '主题' }, { key: 'bar_size', title: '尺寸' },] },
    { key: 'roll', title: 'Roll', children: [{ key: 'roll_theme', title: '主题' }, { key: 'roll_size', title: '尺寸' },] },
  ],
  mark: [
    { key: 'close', title: 'close' },
    { key: 'ok', title: 'ok' },
    { key: 'arrow_left2', title: 'arrow-left2' },
    { key: 'arrow_right2', title: 'arrow-right2' },
  ],
  media: [
    { key: 'example', title: '实例' },
    { key: 'nest', title: '嵌套' },
  ],
  modal: [
    { key: 'prepare', title: '前奏' },
    { key: 'example', title: '实例', children: [{ key: 'example_content', title: '内容' },{ key: 'example_control', title: '控制' },{ key: 'example_scroll', title: '滚动条' },{ key: 'example_center', title: '居中' },{ key: 'example_size', title: '尺寸' },] },
    { key: 'event', title: '事件' },
  ],
  nav: [
    { key: 'example', title: '实例' },
    { key: 'nav', title: 'nav 标签' },
    { key: 'center', title: '居中' },
    { key: 'vt', title: '垂直' },
    { key: 'pill', title: '胶囊样式' },
    { key: 'row', title: '填充整行' },
    { key: 'tab', title: '选项卡', children: [{ key: 'tab_event', title: '事件' }] },
    { key: 'dropdown', title: '下拉导航' },
  ],
  navbar: [
    { key: 'prepare', title: '前奏' },
    { key: 'example', title: '实例' },
    { key: 'theme', title: '主题' },
    { key: 'expand', title: '展开' },
  ],
  pagination: [
    { key: 'example', title: '实例' },
    { key: 'border', title: '带边框的分页' },
    { key: 'size', title: '尺寸' },
    { key: 'theme', title: '主题' },
  ],
  popover: [
    { key: 'prepare', title: '前奏', children: [{ key: 'prepare_init', title: '初始化' }, { key: 'prepare_container', title: '使用 container 参数' },]  },
    { key: 'example', title: '实例' },
    { key: 'direction', title: '方向' },
    { key: 'focus', title: '失去焦点消失' },
    { key: 'event', title: '事件' },
  ],
  progress: [
    { key: 'example', title: '实例' },
    { key: 'progress', title: '<progress> 标签' },
    { key: 'theme', title: '主题' },
    { key: 'striped', title: '条纹' },
    { key: 'animation', title: '动画' },
    { key: 'chunk', title: '分段' },
  ],
  scrollspy: [
    { key: 'prepare', title: '前奏' },
    { key: 'navbar', title: '导航条' },
    { key: 'list', title: '列表' },
    { key: 'event', title: '事件' },
  ],
  table: [
    { key: 'example', title: '实例' },
    { key: 'small', title: '紧凑型表格' },
    { key: 'striped', title: '条纹表格' },
    { key: 'border', title: '带边框的表格' },
    { key: 'hover', title: 'Hover' },
    { key: 'dark', title: '暗色表格' },
    { key: 'row', title: '行状态' },
  ],
  tooltip: [
    { key: 'prepare', title: '前奏', children: [{ key: 'prepare_init', title: '初始化' },] },
    { key: 'example', title: '实例' },
    { key: 'position', title: '位置' },
    { key: 'event', title: '事件' },
  ],
};

export default submenu;