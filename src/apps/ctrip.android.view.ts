import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告右上角的“跳过广告”',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
      rules: {
        action: 'clickCenter',
        matches: '@TextView[text="跳过广告"][visibleToUser=true]',
      },
    },
    {
      key: 1,
      name: '全屏广告-首页直播推广弹窗',
      desc: '关闭首页的携程直播推广弹窗',
      fastQuery: true,
      activityIds:
        'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
      rules:
        '@ImageView[clickable=true][visibleToUser=true] + FrameLayout[childCount=1] > FrameLayout > FrameLayout > ViewPager > RelativeLayout > TextView[text="立即领取"]',
    },
  ],
});
