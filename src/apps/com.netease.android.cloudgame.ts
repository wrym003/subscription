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
    {
      key: 1,
      name: '通知提示-开启通知弹窗',
      desc: '关闭“开启通知”权限引导弹窗',
      fastQuery: true,
      activityIds: 'com.netease.android.cloudgame.activity.MainActivity',
      rules:
        'FrameLayout[vid="dialog_container"] > ViewGroup > @ImageView[vid="push_notify_permission_dialog_close_btn"][clickable=true][visibleToUser=true]',
    },
    {
      key: 2,
      name: '分段广告-我的页面推荐广告',
      desc: '关闭我的页面中的推荐广告卡片',
      fastQuery: true,
      activityIds: 'com.netease.android.cloudgame.activity.MainActivity',
      rules:
        'FrameLayout[vid="mine_ui_ad_layout"] @ImageView[index=2][clickable=true][visibleToUser=true][width<100][height<100]',
    },
  ],
});
