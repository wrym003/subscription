import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: '全屏广告-我的页面升级弹窗',
      desc: '关闭“我的”页面的升级介绍弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.NovaMainActivity',
      rules:
        'TextView[text="「我的」全新升级"] + TextView[text="进入「生活家」领任务 享权益"] + @FrameLayout[clickable=true][childCount=1][visibleToUser=true]',
    },
  ],
});
