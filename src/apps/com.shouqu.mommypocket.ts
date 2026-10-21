import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shouqu.mommypocket',
  name: '美物清单',
  groups: [
    {
      key: 0,
      name: '通知提示-开启消息通知弹窗',
      desc: '关闭首页的消息通知权限引导弹窗',
      fastQuery: true,
      activityIds: 'com.shouqu.mommypocket.views.activities.MainActivity',
      rules:
        'LinearLayout[childCount=2] > FrameLayout[vid="push_setting_ll"][clickable=true] + @ImageView[vid="push_setting_close_btn"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页活动弹窗',
      desc: '关闭首页的活动推广弹窗',
      fastQuery: true,
      activityIds: 'com.shouqu.mommypocket.views.activities.MainActivity',
      rules:
        'LinearLayout[vid="viewPager_LL"] > ViewPager[vid="viewPager"] + FrameLayout[vid="bottomBannerView"] + @ImageView[vid="push_popup_close"][clickable=true][visibleToUser=true]',
    },
  ],
});
