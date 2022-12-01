import {
  API_NAV_LIST,
  API_QUERY_RECOMMEND,
  API_ARTICLE_LIST,
  API_ARTICLE_TYPE,
  API_ARTICLE_TAGS,
} from '@/constants';
import { get } from '@/utils';

export const getNavMenuItems = () => {
  return get(API_NAV_LIST);
};

export const getRecommend = () => {
  return get(API_QUERY_RECOMMEND);
};

interface IArticleListParams {
  pageNum: string | number;
  pageSize: string | number;
}

export const getArticleList = (params: IArticleListParams) => {
  return get(API_ARTICLE_LIST, params);
};

export const getArticleTypes = () => {
  return get(API_ARTICLE_TYPE);
};

export const getTags = () => {
  return get(API_ARTICLE_TAGS);
};
