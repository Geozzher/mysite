import { TagsFilled } from '@ant-design/icons';
import { Tag, Empty } from 'antd';
import { ReactNode } from 'react';
import './index.less';

interface IArticleRightContainerProps {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
}
export default function ArticleRightContainer({
  icon,
  title,
  children,
}: IArticleRightContainerProps) {
  return (
    <>
      <div className="article-right-container-wrapper">
        <div className="article-right-container-title">
          {icon ? icon : ''}
          <span className="article-right-container-title-label">{title}</span>
        </div>

        {children ? (
          <div className="article-right-container-content">{children} </div>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </>
  );
}
