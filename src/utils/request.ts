import { request } from 'umi';

/**
 * get请求
 * @param {string} url:请求路径
 * @param {object} params?:请求参数
 */
export const get = (url: string, params?: Record<string, any>) => {
  try {
    return request(url, { params });
  } catch (error) {
    return { stat: 'failed', msg: '系统异常' };
  }
};

/**
 * post请求
 * @param {string} url:请求路径
 * @param {object} params?:请求参数
 */
export const post = (url: string, params?: Record<string, any>) => {
  return request(url, { data: { ...params } });
};
