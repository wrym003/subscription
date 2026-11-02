import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页活动弹窗',
      desc: '关闭24小时免广告权益和连续包月会员弹窗',
      enable: false,
      activityIds: 'com.mfcloudcalculate.networkdisk.MainActivity',
      rules: [
        {
          key: 0,
          name: '24小时免广告权益',
          action: 'clickCenter',
          actionMaximum: 1,
          resetMatch: 'app',
          // 快照 1793609847975：说明文字后的可点击图片是右上角关闭按钮。
          matches:
            'View[desc="24小时累计看3个广告可获得"] + @ImageView[clickable=true][visibleToUser=true][width<200][height<200][left>1000]',
        },
        {
          key: 1,
          name: '连续包月会员',
          action: 'clickCenter',
          actionMaximum: 1,
          resetMatch: 'app',
          // 快照 1793609842458：关闭图标位于顶部可点击图片的右侧。
          position: {
            left: 'width * 0.92',
            top: 'height * 0.66',
          },
          matches:
            '@ImageView[clickable=true][visibleToUser=true][width>1000][height<200] + View[desc="畅享无广告纯净体验"]',
        },
      ],
    },
  ],
});
