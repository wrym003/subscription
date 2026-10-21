import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhongduomei.rrmj.society',
  name: '人人视频',
  groups: [
    {
      key: 0,
      name: '功能类-确认未成年模式提示',
      desc: '点击未成年模式弹窗中的“我知道了”',
      fastQuery: true,
      activityIds: 'com.rrtv.rrtvtrunk.main.presentation.MainActivity',
      rules: {
        matches: [
          'TextView[text="未成年模式"][visibleToUser=true]',
          '@TextView[vid="tv_next"][text="我知道了"][clickable=true][visibleToUser=true]',
        ],
      },
    },
  ],
});
