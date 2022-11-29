import { CopyOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import './index.less';

export default function render0ArticleTypes(typeList: IArticleTypeList) {
  return (
    <>
      <div className="article-types-wrapper">
        <div className="article-types-wrapper-title">
          <CopyOutlined />
          <span>文章类别</span>
        </div>
        <div className="article-types-wrapper-container">
          {typeList.map((typeItem) => (
            <span
              key={typeItem.typeId}
              className="article-types-wrapper-container-item"
            >
              <Tag color={typeItem.color}>{typeItem.typeName}</Tag>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
