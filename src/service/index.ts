import { get } from '@/utils';

const QUERY_NAVGATION_URL = '/api/queryNavMenu';
export const getNavMenuItems = () => {
  return get(QUERY_NAVGATION_URL);
};

const QUERY_RECOMMEND_URL = '/api/queryRecommend';
export const getRecommend = () => {
  return get(QUERY_RECOMMEND_URL);
};
