# 个人 GKD 订阅

基于 [aoguai/subscription 的 custom 分支](https://github.com/aoguai/subscription/tree/custom)维护的个人版 GKD 订阅。感谢原作者及贡献者。

✨避免臃肿冗余耗电，提供更**全面**的订阅体验✨

## 使用方法 🚀

⚠️ **使用本项目前，请务必仔细阅读并理解本项目的 [LICENSE](./LICENSE) 与 [LEGAL.md](./LEGAL.md)。继续使用即表示您已完全接受所有条款。**

若您已阅读了解并同意 [LICENSE](./LICENSE) 与 [LEGAL.md](./LEGAL.md)，可将以下链接添加至 [GKD](https://github.com/gkd-kit/gkd)，或下载订阅文件离线导入：

| 来源 | 链接 |
| --- | --- |
| GitHub 源 | [订阅链接](https://raw.githubusercontent.com/wrym003/subscription/custom/dist/aoguai_gkd.json5) |
| jsDelivr 源 | [订阅链接](https://cdn.jsdelivr.net/gh/wrym003/subscription@custom/dist/aoguai_gkd.json5) |
| 国内 Fastly 源 | [订阅链接](https://fastly.jsdelivr.net/gh/wrym003/subscription@custom/dist/aoguai_gkd.json5) |
| 离线文件 | [下载订阅文件](./dist/aoguai_gkd.json5) |

任选一个在线来源添加到 GKD 即可，避免重复订阅。jsDelivr 链接可能因缓存而延迟更新。

第一次修改这个仓库？请看 [维护指南](./维护指南.md)。

**请注意：**

- **本项目维护的规则仅默认启用 `启动页/开屏` 相关规则，其它所有规则均需使用者手动打开**

## 说明 📝

当前版本: v100

当前订阅文件含 253 应用规则组， 9 全局规则组。

**🔍 查看详细[适配规则列表](./dist/README.md)**

如需继续增删应用规则，请修改 `src/apps/`，运行 `pnpm run check` 和 `pnpm run build`，并提交更新后的 `dist/` 文件。

## 相关 ⭐️

此仓库 基于 [GKD 默认订阅规则](https://github.com/gkd-kit/subscription) 与 [GKD 订阅模板](https://github.com/gkd-kit/subscription-template) 构建，感谢原开发者们的贡献。

### Wiki

欲了解更多信息？请访问 [Wiki](https://github.com/aoguai/subscription/wiki)，包括使用说明、相关教程和相关项目。

## License 说明

本项目采用 [GNU General Public License v3.0](./LICENSE)（GPL-3.0）开源。

## 使用须知

使用本项目前，请您务必仔细阅读并充分理解 [LEGAL.md](./LEGAL.md)，请在阅读完毕后再决定是否使用, 继续使用即表示您已完全接受所有条款理解并愿意自行承担相应风险与后果。

## Star History

[![Star History Chart](https://starhistory.link/aoguai/subscription.svg?theme=cyan)](https://starhistory.link/aoguai/subscription)
