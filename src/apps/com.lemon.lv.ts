import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 0,
      name: '全屏广告-会员推广弹窗',
      desc: '关闭剪映中的会员推广弹窗',
      enable: false,
      activityIds: 'com.vega.main.TransLynxActivity',
      rules: {
        matchRoot: true,
        action: 'clickCenter',
        // 快照 1794969657308：右上角的关闭图标位于这个非 clickable 的小容器中。
        matches: [
          'ViewGroup[vid="playerContent"] TextureView[vid="textureView"][visibleToUser=true]',
          'ViewGroup[childCount=4][height>1500] > @ViewGroup[index=1][width<120][height<120] > ImageView[width<80][height<80]',
        ],
      },
    },
  ],
});
