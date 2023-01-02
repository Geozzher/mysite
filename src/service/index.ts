import {
  API_NAV_LIST,
  API_QUERY_RECOMMEND,
  API_ARTICLE_LIST,
  API_ARTICLE_TYPE,
  API_ARTICLE_TAGS,
  API_ARTICLE_DETAIL,
  API_ARTICLE_VIEWS,
  API_TRACERT,
} from '@/constants';
import { get } from '@/utils';

export const getNavMenuItems = () => {
  return get(API_NAV_LIST);
};

export const getRecommend = () => {
  return get(API_QUERY_RECOMMEND);
};

interface IArticleListParams {
  current: string | number;
  pageSize: string | number;
}

export const getArticleList = (params: IArticleListParams) => {
  return get(API_ARTICLE_LIST, params);
};

export const getArticleTypes = () => {
  return get(API_ARTICLE_TYPE);
};

export const getArticleTags = () => {
  return get(API_ARTICLE_TAGS);
};

interface IArticleDetailParams {
  id: string | number;
}

export const getArticleDetail = (params: IArticleDetailParams) => {
  return get(API_ARTICLE_DETAIL, params);
};

export const updateArticleView = (params: IArticleDetailParams) => {
  return get(API_ARTICLE_VIEWS, params);
};

export const tracert = (key: string) => {
  return get(API_TRACERT, { key });
};
