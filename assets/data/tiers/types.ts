import rewards from './index.json';

export type RewardGroup = typeof rewards[0];
export type RewardGroupItem = RewardGroup['rewards'][0];