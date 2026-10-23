import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '通知提示-开启消息通知弹窗',
      desc: '关闭选择通知类型的权限引导弹窗',
      fastQuery: true,
      activityIds: 'com.sina.weibo.notifyguidev2.NotifyGuideV2Activity',
      rules:
        'FrameLayout[vid="vg_all"] > LinearLayout[vid="vg_bottom"] > FrameLayout > @ImageView[vid="bt_cancel"][clickable=true][visibleToUser=true]',
    },
    {
      key: 1,
      name: '全屏广告-连续签到弹窗',
      activityIds: 'com.sina.weibo.feed.MPDialogActivity',
      rules: {
        action: 'clickCenter',
        matches: [
          'TextView[text="点击签到"][visibleToUser=true]',
          'View[childCount=4] > @TextView[text=""][index=3][width>100][width<180][height>100][height<180][visibleToUser=true]',
        ],
      },
    },
    {
      key: 2,
      name: '分段广告-评论区广告反馈',
      activityIds: 'com.sina.weibo.feed.SubCommentActiity',
      fastQuery: true,
      rules:
        'GridView[vid="blog_feedback_subitem"] > @TextView[text="对此内容不感兴趣"][clickable=true][visibleToUser=true]',
    },
  ],
});
