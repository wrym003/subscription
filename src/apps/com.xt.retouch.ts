import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xt.retouch',
  name: '醒图',
  groups: [
    {
      key: 0,
      name: '通知提示-热门推送权限弹窗',
      desc: '关闭首页的通知权限引导弹窗',
      fastQuery: true,
      activityIds: 'com.xt.retouch.uilauncher.MainActivity',
      rules:
        '@ImageView[vid="iv_push_auth_guide_close"][clickable=true] + TextView[vid="tv_push_auth_guide_title"][text="热门推送"]',
    },
    {
      key: 1,
      name: '全屏广告-首页VIP弹窗',
      desc: '关闭首页的VIP视频推广弹窗。关闭按钮无独立控件，按快照中的位置点击',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds:
        'com.xt.retouch.lynx.impl.common.container.LynxCommonTransparentActivity',
      rules: {
        action: 'clickCenter',
        position: {
          left: 'width * 0.94',
          top: 'height * 0.44',
        },
        matches:
          '@FrameLayout[vid="common_lynx_container"] > FrameLayout[focusable=true] > ViewGroup[childCount=2] > ViewGroup[childCount=1] > ViewGroup[childCount=2] > FrameLayout > ViewGroup > ViewGroup[childCount=2] > FrameLayout > ViewGroup[vid="playerContent"] > FrameLayout[vid="fl_ttv_container"] > TextureView[vid="textureView"]',
      },
    },
  ],
});
