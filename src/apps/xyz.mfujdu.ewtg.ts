import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'xyz.mfujdu.ewtg',
  name: '天眼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告右下角的跳过按钮',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'p.BV',
      // 快照 1794063172715：右下角独立的可点击文字控件。
      rules: '[text="跳过"][vid="arg"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页公告弹窗',
      desc: '关闭首页的官方公告弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'o.BS',
      // 快照 1794063178604：公告标题与右上角关闭按钮位于同一个弹窗内。
      rules: {
        matches: [
          'ViewGroup[vid="arg"] > TextView[vid="arg"][text="官方公告，请仔细阅读"]',
          'ViewGroup[vid="arg"][childCount=3] > ViewGroup[vid="arg"][childCount=4] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 2,
      name: '全屏广告-首页VIP活动弹窗',
      desc: '关闭首页的永久VIP活动弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'o.BS',
      // 快照 1794063185848：两个领取按钮所在容器后面的可点击图片是底部关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=2]',
    },
  ],
});
