import { getWeekDay } from '@/utils/dateUtils';

export const MUSIC_LIST = [
  // '1455273374', //风的小径-万能日记
  // '1996687319', //晚霞 - cherrymint
  // '1452859427', //Under the Sea (鲸落) - 仁辰 / 南有乔木
  // '1407389699', //林深见鹿不见你 - 赵大鼾
  '277386', // 忽然之间 - 莫文蔚
  '1372342235', // 鸟儿飞 - 于果
  '29764563', // 不搭 - 李荣浩
  '439139384', // 声声慢 - 崔开潮
  '1330348068', // 买辣椒也用券 - 起风了
  '5239544', // 有你的快乐 - 王若琳
  '1334246005', // Way Back Home (Sam Feldt Edit) - SHAUN / Conor Maynard / Sam Feldt
];

export const getMusic = () => {
  const musicId = MUSIC_LIST[getWeekDay()];
  return `//music.163.com/outchain/player?type=2&id=${musicId}&auto=1&height=66`;
};
