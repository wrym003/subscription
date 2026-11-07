import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'club.wjb.lhod',
  name: 'Blued制片厂',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告右上角的跳过按钮',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'q.CC',
      // 快照 1794062515421：右上角独立的可点击文字控件。
      rules: '[text="跳过"][vid="arg"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-首页弹窗',
      desc: '关闭首页的官方公告和活动推广弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'p.BY',
      rules: [
        {
          key: 0,
          name: '官方公告',
          // 快照 1794062524468：公告内容和底部关闭按钮位于同一个弹窗容器内。
          matches: [
            'ViewGroup[vid="arg"] > TextView[vid="arg"][text="官方公告"]',
            'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ViewGroup[vid="arg"] + ImageView[vid="arg"][clickable=false] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          name: '活动推广',
          // 快照 1794062531946：活动图片前面的可点击图片是右上角关闭按钮。
          matches:
            'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=0] + ViewGroup[vid="arg"][childCount=1] > ImageView[vid="arg"][clickable=false]',
        },
      ],
    },
  ],
});
