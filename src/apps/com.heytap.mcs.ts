import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.mcs',
  name: '系统消息',
  groups: [
    {
      key: 0,
      name: '通知提示-红果短剧通知权限引导',
      desc: '点击系统消息通知引导中的“禁止”',
      fastQuery: true,
      activityIds: 'com.heytap.mcs.addition.notifi.NotifiPermissionActivity',
      rules:
        'TextView[vid="notification_permission_txt_title"][text="开启推送，避免错过重要资讯"] + TextView[vid="notification_permission_txt_subtitle"][text="打开通知，热点新闻，兴趣内容及时获取"] + LinearLayout > @TextView[vid="notification_permission_btn_close"][text="禁止"][clickable=true][visibleToUser=true]',
    },
  ],
});
