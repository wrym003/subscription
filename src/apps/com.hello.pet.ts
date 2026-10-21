import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hello.pet',
  name: '街猫',
  groups: [
    {
      key: 0,
      name: '全屏广告-签到页面新人礼包弹窗',
      desc: '返回关闭签到页面的新人礼包推广弹窗',
      fastQuery: true,
      activityIds: 'com.mpaas.mriver.integration.MriverActivityBase$Main',
      rules: {
        action: 'back',
        actionMaximum: 1,
        resetMatch: 'activity',
        matches:
          'RelativeLayout[vid="content_id"][visibleToUser=true][width>600][width<900][height>900][height<1500]',
      },
    },
  ],
});
