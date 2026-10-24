import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页顺风车优惠券弹窗',
      activityIds: 'com.didi.sdk.app.MainActivity',
      fastQuery: true,
      rules:
        'RelativeLayout[vid="tone_pubserv_anim_container"] > @ImageView[vid="popClose"][desc="关闭弹窗"][clickable=true][visibleToUser=true]',
    },
  ],
});
