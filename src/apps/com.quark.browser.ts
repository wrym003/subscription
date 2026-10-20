import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 0,
      name: '全屏广告-网盘会员中心优惠弹窗',
      desc: '关闭网盘会员中心的优惠券和续费挽留弹窗',
      enable: false,
      activityIds: 'com.ucpro.BrowserActivity',
      rules: [
        {
          key: 0,
          name: '拒绝续费挽留弹窗',
          action: 'clickCenter',
          actionMaximum: 1,
          resetMatch: 'activity',
          matches:
            'WebView[text="网盘会员中心"] TextView[text="残忍拒绝"][visibleToUser=true]',
        },
        {
          key: 1,
          name: '关闭优惠券弹窗',
          action: 'clickCenter',
          actionMaximum: 1,
          resetMatch: 'activity',
          position: {
            left: 'width * 0.806',
            top: 'height * 0.225',
          },
          matches:
            'WebView[text="网盘会员中心"] > View[text=""][childCount=1] > View[text=""][childCount=1] > View[text=""][childCount=1] > View[text=""][childCount=1] > View[text=""][childCount=1] > @TextView[text=""][childCount=0]',
        },
      ],
    },
  ],
});
