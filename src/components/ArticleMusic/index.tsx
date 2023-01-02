import { SoundFilled } from '@ant-design/icons';
import './index.less';
import ArticleRightContainer from '../ArticleRightContainer';
import { WY_MUSIC_1842025914 } from '@/constants';

export default function ArticleMusic() {
  return (
    <>
      <ArticleRightContainer icon={<SoundFilled />} title="听首歌，放松一会吧~">
        <iframe
          marginWidth={0}
          frameBorder={0}
          marginHeight={0}
          width="330"
          height="86"
          src={WY_MUSIC_1842025914}
        ></iframe>
      </ArticleRightContainer>
    </>
  );
}
