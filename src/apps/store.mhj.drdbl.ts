import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'store.mhj.drdbl',
  name: 'G站',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页公告弹窗',
      desc: '关闭首页的公告弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'o.BH',
      // 快照 1794063347678：公告内容容器后面的可点击图片是底部关闭按钮。
      rules: {
        matches: [
          'ViewGroup[vid="arg"] > TextView[vid="arg"][text="G站-彩虹圈的Onlyfans"]',
          'FrameLayout[vid="arg"] > ViewGroup[childCount=2] > ViewGroup[vid="arg"][childCount=6] + @ImageView[vid="arg"][clickable=true][visibleToUser=true]',
        ],
      },
    },
    {
      key: 1,
      name: '全屏广告-首页优惠弹窗',
      desc: '关闭首页的全年底价优惠弹窗',
      enable: false,
      matchRoot: true,
      activityIds: 'o.BH',
      // 快照 1794063359107：广告图片、两个领取按钮之后是底部关闭按钮。
      rules:
        'FrameLayout[vid="arg"] > ViewGroup[childCount=3] > ImageView[vid="arg"][clickable=true][index=0] + ViewGroup[vid="arg"][childCount=2] + @ImageView[vid="arg"][clickable=true][visibleToUser=true][index=2]',
    },
    {
      key: 2,
      name: '全屏广告-会员过期弹窗',
      desc: '点击会员过期弹窗中的忍痛放弃',
      enable: false,
      matchRoot: true,
      activityIds: 'o.BH',
      // 快照 1794063365464：会员过期提示与“忍痛放弃”位于同一弹窗。
      rules: {
        matches: [
          'TextView[vid="arg"][text="宝贝，您购买的G站一卡通已经过期啦!"]',
          '@TextView[vid="arg"][text="忍痛放弃"][clickable=true][visibleToUser=true]',
        ],
      },
    },
  ],
});
