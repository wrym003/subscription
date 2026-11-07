import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'shop.crdbz.gbmdib',
  name: 'G頭條',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页公告弹窗',
      desc: '关闭首页的公告必读弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 's.CH',
      // 快照 1794062857720：公告容器后面的可点击图片是底部的关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=5] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页应用中心弹窗',
      desc: '关闭首页的应用入口推荐弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 's.CH',
      // 快照 1794062864484：推荐应用列表后面的可点击图片是底部的关闭按钮。
      rules: {
        matches: [
          'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=1] > RecyclerView[vid="arg"]',
          'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=1] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 2,
      name: '全屏广告-首页VIP活动弹窗',
      desc: '关闭首页的永久VIP活动弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 's.CH',
      // 快照 1794062884942：两张领取按钮后面的可点击图片是底部的关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ImageView[vid="arg"][clickable=true][index=0] + ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=2]',
    },
  ],
});
