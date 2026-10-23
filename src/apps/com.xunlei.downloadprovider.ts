import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '全屏广告-相册备份引导弹窗',
      activityIds: 'com.xunlei.downloadprovider.frame.MainTabActivity',
      fastQuery: true,
      rules: {
        matches: [
          'TextView[vid="guide_subtitle"][text="自动备份难忘回忆，换机找图更容易"][visibleToUser=true]',
          'ViewGroup[vid="panel_container"] > @ImageView[vid="close_icon"][clickable=true][visibleToUser=true]',
        ],
      },
    },
  ],
});
