import { TagsFilled } from '@ant-design/icons';
import { Tag, Empty } from 'antd';
import './index.less';

export default function renderArticleTags(tagList: IArticleTagsList) {
  return (
    <>
      <div className="article-tags-wrapper">
        <div className="article-tags-wrapper-title">
          <TagsFilled />
          <span>标签墙</span>
        </div>
        <div className="article-tags-wrapper-container">
          {tagList?.length ? (
            tagList.map((tagItem) => (
              <span
                key={tagItem.tagId}
                className="article-types-wrapper-container-item"
              >
                <Tag color={tagItem.color}>{tagItem.tagName}</Tag>
              </span>
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </div>
    </>
  );
}
