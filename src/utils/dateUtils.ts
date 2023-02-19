import moment from 'moment';

/**
 * 获取周几
 * @returns number
 */
export const getWeekDay = (): number => {
  return moment().weekday();
};
