import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击启动广告右上角的跳过按钮',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      activityIds: '.launcher.splash.SplashMainActivity',
      rules:
        'TextView[vid="tv_splash_ads_label"][text="广告"] + @View[vid="homepage_advert_pb"][clickable=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      desc: '点击主页活动弹窗下方的关闭按钮',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.homepage.MainActivity',
      rules:
        'ImageView[vid="homepage_popup_window_image"] + @FrameLayout[vid="homepage_popup_window_close_btn"][clickable=true]',
    },
    {
      key: 2,
      name: '全屏广告-首页优惠券弹窗',
      activityIds: '.homepage.MainActivity',
      fastQuery: true,
      rules:
        'RelativeLayout[vid="new_person_dialog_top_container"] > @ImageView[vid="new_person_dialog_top_close_iv"][clickable=true][visibleToUser=true]',
    },
  ],
});
