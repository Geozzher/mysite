import { T_F_BOARD } from '@/constants';
import { tracert } from '@/service';
import { useRequest } from 'umi';
import './index.less';

export default function Board() {
  useRequest(() => tracert(T_F_BOARD));
  return (
    <div className="board-container">
      <h1>Board Page</h1>
    </div>
  );
}
