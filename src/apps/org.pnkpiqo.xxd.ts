import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.pnkpiqo.xxd',
  name: '斗硬',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页弹窗',
      desc: '依次关闭首页的官方公告、应用中心和终身VIP活动弹窗',
      enable: false,
      fastQuery: true,
      matchRoot: true,
      activityIds: 'o.BV',
      rules: [
        {
          key: 0,
          name: '官方公告',
          // 快照 1794061846560：公告内容容器后面的可点击图片是底部的关闭按钮。
          matches:
            'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        },
        {
          key: 1,
          name: '应用中心',
          preKeys: [0],
          // 快照 1794061851926：推荐应用列表后面的可点击图片是底部的关闭按钮。
          matches: [
            'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=1] > RecyclerView[vid="arg"]',
            'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=1] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          name: '终身VIP活动',
          preKeys: [1],
          // 快照 1794061855223：活动图片后面的可点击图片是底部的关闭按钮。
          matches:
            'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ImageView[vid="arg"][clickable=true][index=0] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=1]',
        },
      ],
    },
  ],
});
