import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'media.siz.oco',
  name: '熊王',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页公告弹窗',
      desc: '关闭首页的官方公告弹窗',
      enable: false,
      fastQuery: true,
      matchRoot: true,
      activityIds: 'o.BR',
      // 快照 1794063780464：公告内容容器后面的可点击图片是右上角关闭按钮。
      rules: {
        matches: [
          'ViewGroup[vid="arg"][childCount=2] > TextView[vid="arg"][text="官方公告"]',
          'ViewGroup[vid="arg"][childCount=3] > ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 1,
      name: '全屏广告-首页应用中心弹窗',
      desc: '关闭首页的应用入口推荐弹窗',
      enable: false,
      fastQuery: true,
      matchRoot: true,
      activityIds: 'o.BR',
      // 快照 1794063784660：应用入口列表容器后面的可点击图片是底部关闭按钮。
      rules: {
        matches: [
          'ViewGroup[vid="arg"][childCount=1] > RecyclerView[vid="arg"]',
          'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=1] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 2,
      name: '全屏广告-首页会员活动弹窗',
      desc: '关闭首页的永久会员活动弹窗',
      enable: false,
      fastQuery: true,
      matchRoot: true,
      activityIds: 'o.BR',
      // 快照 1794063788339：广告图片和两个领取按钮之后是底部关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ImageView[vid="arg"][clickable=true][index=0] + ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=2]',
    },
  ],
});
