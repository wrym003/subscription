import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '局部广告-各类广告',
      desc: '关闭各类局部广告',
      rules: [
        {
          key: 0,
          name: '卡片广告1',
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12639658',
        },
        {
          key: 1,
          name: '顶部横幅1',
          fastQuery: true,
          activityIds: '.framework.plugin.rn.PluginRNActivity',
          matches:
            '@[desc="关闭"] <3 ViewGroup < [visibleToUser=true] <2 [childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29299389',
        },
        {
          key: 2,
          name: '商城首页活动弹窗',
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matchRoot: true,
          action: 'clickCenter',
          actionMaximum: 1,
          resetMatch: 'match',
          matches: [
            'ViewGroup[clickable=true][childCount=2][width>500][height>900] > ViewGroup[index=0][childCount=1] > ImageView[width>500][height>700][visibleToUser=true]',
            'ViewGroup[clickable=true][childCount=2][width>500][height>900] > @ImageView[index=1][visibleToUser=true][width>40][width<200][height>40][height<200]',
          ],
        },
      ],
    },
  ],
});
