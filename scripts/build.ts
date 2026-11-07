import { updateDist } from '@gkd-kit/tools';
import { updateReadMeMd } from './updateReadMeMd';
import { summarizeOtherApps } from './summarizeOtherApps';
import subscription from './check';

await updateDist(subscription);

await summarizeOtherApps();

await updateReadMeMd();
