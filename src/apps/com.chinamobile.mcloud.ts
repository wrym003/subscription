import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 0,
      name: '通知提示-开启通知弹窗',
      desc: '点击开启通知提示右上角的关闭按钮',
      fastQuery: true,
      activityIds: '.client.ui.MenuActivity',
      rules:
        '[vid="btn_push_notice_close_dialog"][clickable=true][visibleToUser=true]',
    },
  ],
});
