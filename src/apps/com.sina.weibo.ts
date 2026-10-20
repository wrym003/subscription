import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '通知提示-开启消息通知弹窗',
      desc: '关闭选择通知类型的权限引导弹窗',
      fastQuery: true,
      activityIds: 'com.sina.weibo.notifyguidev2.NotifyGuideV2Activity',
      rules:
        'FrameLayout[vid="vg_all"] > LinearLayout[vid="vg_bottom"] > FrameLayout > @ImageView[vid="bt_cancel"][clickable=true][visibleToUser=true]',
    },
  ],
});
