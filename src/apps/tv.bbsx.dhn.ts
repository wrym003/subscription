import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.bbsx.dhn',
  name: 'G-news',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告右上角的跳過按钮',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'r.CC',
      // 快照 1794063529047：右上角独立的可点击文字控件。
      rules:
        'TextView[vid="arg"][text="跳過"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页公告弹窗',
      desc: '关闭首页的公告必讀弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'q.BY',
      // 快照 1794063534247：公告内容容器后面的可点击图片是底部关闭按钮。
      rules: {
        matches: [
          'TextView[text^="因產品內容敏感"]',
          'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=7] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 2,
      name: '全屏广告-首页会员活动弹窗',
      desc: '关闭首页的永久会员活动弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'q.BY',
      // 快照 1794063540304：广告图片和两个领取按钮之后是底部关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ImageView[vid="arg"][clickable=true][index=0] + ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=2]',
    },
  ],
});
