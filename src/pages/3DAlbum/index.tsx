import './index.less';
import Album from '@/components/Album';
import { T_F_ALBUM } from '@/constants';
import { useRequest } from 'umi';
import { tracert } from '@/service';
export default function AlbumPage() {
  useRequest(() => tracert(T_F_ALBUM));
  return (
    <div className="album-page-container">
      <Album></Album>
    </div>
  );
}
