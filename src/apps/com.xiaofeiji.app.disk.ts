import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaofeiji.app.disk',
  name: '小飞机网盘',
  groups: [
    {
      key: 0,
      name: '全屏广告-签到活动弹窗',
      desc: '点击启动后签到活动弹窗底部的关闭按钮',
      fastQuery: true,
      activityIds: '.MainActivity',
      rules: 'View[desc="签到活动"] +n @ImageView[clickable=true][desc=null]',
    },
    {
      key: 1,
      name: '全屏广告-首页会员弹窗',
      desc: '关闭首页的连续包月会员推广弹窗',
      fastQuery: true,
      activityIds: 'com.xiaofeiji.app.disk.MainActivity',
      rules:
        'View[desc*="开通连续包月会员"] +2 @ImageView[clickable=true][visibleToUser=true]',
    },
  ],
});
