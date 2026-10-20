import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.android.cloudgame',
  name: '网易云游戏',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页会员弹窗',
      desc: '关闭首页弹出的手游会员广告',
      fastQuery: true,
      activityIds: 'com.netease.android.cloudgame.activity.MainActivity',
      rules:
        'FrameLayout[vid="dialog_container"] > ViewGroup[childCount=2] > @ImageView[vid="guide_close_btn"][clickable=true][visibleToUser=true]',
    },
  ],
});
