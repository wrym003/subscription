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
      matchRoot: true,
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
      activityIds: [
        'com.sina.weibo.feed.SubCommentActiity',
        'com.sina.weibo.feed.detailrefactor.DetailPageActivity',
      ],
      fastQuery: true,
      matchRoot: true,
      rules:
        'GridView[vid="blog_feedback_subitem"] > @TextView[text="对此内容不感兴趣"][clickable=true][visibleToUser=true]',
    },
    {
      key: 3,
      name: '分段广告-评论区上方横幅广告',
      desc: '关闭微博详情页评论区上方的横幅广告卡片',
      activityIds: 'com.sina.weibo.feed.detailrefactor.DetailPageActivity',
      fastQuery: true,
      matchRoot: true,
      rules: [
        {
          key: 0,
          matches:
            'FrameLayout[childCount=4] > FrameLayout[index=2][childCount=1] > @ImageView[clickable=true][visibleToUser=true][width<80][height<80]',
        },
        {
          key: 1,
          actionMaximum: 1,
          resetMatch: 'activity',
          matches: [
            'TextView[vid="title_title_left"][text="相关推荐"] < ViewGroup +2 RelativeLayout[childCount=2] > ViewGroup[clickable=true] > ViewGroup[childCount=2] > ImageView[index=0][width>800][height>180]',
            'TextView[vid="title_title_left"][text="相关推荐"] +2 @FrameLayout[vid="title_dot_right"][clickable=true][visibleToUser=true]',
          ],
        },
        {
          key: 2,
          name: '选择不想看到此类内容',
          action: 'clickCenter',
          // 快照 1793929024369：广告反馈弹窗的第二个可点击选项。
          matches:
            'FrameLayout[vid="bottomsheet"] > ScrollView > RelativeLayout > LinearLayout[vid="ll_container"] > @LinearLayout[clickable=true][visibleToUser=true] > LinearLayout > TextView[vid="tv_name"][text="不想看到此类内容"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-感兴趣的博主推荐弹窗',
      desc: '关闭主页随机出现的博主推荐弹窗',
      activityIds: 'com.sina.weibo.page.recommend.AccountRecommendActivity',
      fastQuery: true,
      rules:
        'LinearLayout[vid="root_view"] > @Button[vid="recommend_close_activity"][clickable=true][visibleToUser=true]',
    },
    {
      key: 5,
      name: '功能类-详情页底部关注卡片',
      desc: '关闭微博详情页底部遮挡评论的关注卡片',
      activityIds: 'com.sina.weibo.feed.detailrefactor.DetailPageActivity',
      fastQuery: true,
      matchRoot: true,
      order: -5,
      actionDelay: 500,
      actionCd: 1500,
      actionMaximum: 3,
      resetMatch: 'match',
      rules:
        '@FrameLayout[vid="close_layout"][clickable=true][visibleToUser=true] > ImageView[vid="ivClose"][visibleToUser=true]',
    },
  ],
});
