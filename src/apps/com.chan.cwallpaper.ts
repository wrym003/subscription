import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chan.cwallpaper',
  name: '图凌',
  groups: [
    {
      key: 0,
      name: '功能类-启动页进入主页',
      activityIds: 'com.chan.cwallpaper.module.launch.LaunchActivity',
      fastQuery: true,
      rules: {
        actionMaximum: 1,
        resetMatch: 'activity',
        matches:
          'Button[vid="activate_button"][text*="ATTITUDE"][clickable=true][visibleToUser=true]',
      },
    },
  ],
});
