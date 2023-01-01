import { CopyOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import ArticleRightContainer from '../ArticleRightContainer';
import './index.less';

export default function render0ArticleTypes(typeList: IArticleTypeList) {
  return (
    <>
      <ArticleRightContainer icon={<CopyOutlined />} title="文章类别">
        {typeList.length
          ? typeList.map((tagItem) => (
              <span key={tagItem.id} className="article-tags-item">
                <Tag color={tagItem.color}>{tagItem.label}</Tag>
              </span>
            ))
          : ''}
      </ArticleRightContainer>
    </>
  );
}
