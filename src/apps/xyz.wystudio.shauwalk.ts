import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'xyz.wystudio.shauwalk',
  name: '刷步数',
  groups: [
    {
      key: 0,
      name: '功能类-确认启动公告',
      activityIds: 'xyz.wystudio.shauwalk.rn_1',
      fastQuery: true,
      rules: {
        matches: [
          'TextView[text="公告"][visibleToUser=true]',
          '@Button[text="我知道了"][clickable=true][visibleToUser=true]',
        ],
      },
    },
  ],
});
