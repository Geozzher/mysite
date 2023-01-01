//music.163.com/outchain/player?type=2&id=1842025914&auto=1&height=66

import { SoundFilled } from '@ant-design/icons';
import './index.less';
import ArticleRightContainer from '../ArticleRightContainer';

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
          src="//music.163.com/outchain/player?type=2&id=1842025914&auto=1&height=66"
        ></iframe>
      </ArticleRightContainer>
    </>
  );
}
