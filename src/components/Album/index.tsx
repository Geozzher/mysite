import './index.less';
import { LeftOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { MAIN_PAGE, ALBUM_MP3_URL } from '../../constants';

export default function Album() {
  const hideHeaderFooter = () => {
    const layoutHeader = document.querySelector(
      '.site-layout-header',
    ) as HTMLElement;
    const layoutFooter = document.querySelector(
      '.site-layout-footer',
    ) as HTMLElement;
    layoutHeader && (layoutHeader.style.display = 'none');
    layoutFooter && (layoutFooter.style.display = 'none');
  };

  const gotoMainPage = () => {
    window.location.href = MAIN_PAGE;
  };
  useEffect(() => {
    hideHeaderFooter();
  }, []);
  return (
    <>
      <audio autoPlay loop>
        <source src={ALBUM_MP3_URL} type="audio/mp3" />
      </audio>
      <LeftOutlined className="back" onClick={gotoMainPage} />
      <div className="album">
        <div className="box">
          <ul className="minbox">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ol className="maxbox">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    </>
  );
}
