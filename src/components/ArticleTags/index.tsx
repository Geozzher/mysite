import { TagsFilled } from '@ant-design/icons';
import { Tag, Empty } from 'antd';
import './index.less';
import ArticleRightContainer from '../ArticleRightContainer';

export default function renderArticleTags(tagList: IArticleTagsList) {
  return (
    <>
      <ArticleRightContainer icon={<TagsFilled />} title="标签墙">
        {tagList.length
          ? tagList.map((tagItem) => (
              <span key={tagItem.id} className="article-tags-item">
                <Tag color={tagItem.color}>{tagItem.label}</Tag>
              </span>
            ))
          : ''}
      </ArticleRightContainer>
    </>
  );
}
