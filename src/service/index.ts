import { get } from '@/utils';

const QUERY_NAVGATION_URL = '/api/queryNavMenu';
export const getNavMenuItems = () => {
  return get(QUERY_NAVGATION_URL);
};

const QUERY_RECOMMEND_URL = '/api/queryRecommend';
export const getRecommend = () => {
  return get(QUERY_RECOMMEND_URL);
};

interface IArticleListParams {
  pageNum: string;
}
const QUERY_ARTICLE_LIST_URL = '/api/queryArticleList';
export const getArticleList = (params: IArticleListParams) => {
  return get(QUERY_ARTICLE_LIST_URL, params);
};

const QUERY_ARTICLE_TYPE_URL = '/api/queryArticleTypes';
export const getArticleTypes = () => {
  return get(QUERY_ARTICLE_TYPE_URL);
};

const QUERY_ARTICLE_TAGS_URL = '/api/queryTags';
export const getTags = () => {
  return get(QUERY_ARTICLE_TAGS_URL);
};
