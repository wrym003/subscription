import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页活动弹窗',
      desc: '关闭首页弹出的活动广告',
      fastQuery: true,
      activityIds: 'com.tencent.zone.main.notice.NoticeActivity',
      rules:
        'RelativeLayout[vid="picture"] > @ImageView[vid="notice_close_pic"][clickable=true][visibleToUser=true] + FrameLayout[vid="fl_jump"][clickable=true]',
    },
  ],
});
