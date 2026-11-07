import fs from 'node:fs/promises';
import { RawSubscription } from '@gkd-kit/api';
import { getReadme } from '@gkd-kit/tools';
import JSON5 from 'json5';

const otherAppIds = new Set([
  'club.wjb.lhod',
  'media.siz.oco',
  'org.pnkpiqo.xxd',
  'shop.crdbz.gbmdib',
  'store.mhj.drdbl',
  'tv.bbsx.dhn',
  'xyz.mfujdu.ewtg',
]);

export const summarizeOtherApps = async () => {
  const subscriptionPath = process.cwd() + '/dist/aoguai_gkd.json5';
  const subscription = JSON5.parse(
    await fs.readFile(subscriptionPath, 'utf-8'),
  ) as RawSubscription;
  const names = new Set(
    (subscription.apps ?? [])
      .filter((app) => otherAppIds.has(app.id))
      .map((app) => app.name)
      .filter((name): name is string => name !== undefined),
  );
  if (names.size !== otherAppIds.size) {
    throw new Error('无法找到全部需要汇总为“其他”的应用');
  }

  const readmePath = process.cwd() + '/dist/README.md';
  const lines = getReadme(subscription).trimEnd().split(/\r?\n/);
  const sectionStart = lines.indexOf('## 应用规则');
  if (sectionStart < 0) {
    throw new Error('无法找到应用规则列表');
  }
  const nextSection = lines.findIndex(
    (line, index) => index > sectionStart && line.startsWith('## '),
  );
  const sectionEnd = nextSection < 0 ? lines.length : nextSection;
  const found = new Set<string>();
  let groupCount = 0;
  const rows = lines.slice(sectionStart + 1, sectionEnd).filter((line) => {
    const match = /^\|([^|]+)\|(\d+)\|/.exec(line);
    if (!match || !names.has(match[1])) return true;
    found.add(match[1]);
    groupCount += Number(match[2]);
    return false;
  });
  if (found.size !== names.size) {
    throw new Error('应用规则列表缺少需要汇总的应用');
  }

  rows.push(`|其他|${groupCount}|含开屏广告、首页弹窗等|`);
  const updated = [
    ...lines.slice(0, sectionStart + 1),
    ...rows,
    ...lines.slice(sectionEnd),
  ];
  await fs.writeFile(readmePath, updated.join('\n') + '\n');
};
