import { CalendarOutlined, CopyOutlined, TagsFilled } from '@ant-design/icons';
import { ARTICLE_DETAIL } from '@/constants';
import './index.less';
import { Tag, Image } from 'antd';
import { Link } from 'umi';

export default function ArticleListItem(props: IArticleListItemProps) {
  const { id, coverPicture, articleTitle, createTime, tag, type } = props;
  return (
    <>
      <div className="article-sort-item">
        <Image
          className="article-sort-item-img"
          src={coverPicture}
          alt={articleTitle}
          width={80}
          height={80}
        />

        <div className="article-sort-item-info">
          <span>
            <CalendarOutlined />
            <span>发布时间：</span>
            <time className="article-sort-item-info-time">{createTime}</time>
            &nbsp;&nbsp;
            <TagsFilled />
            <span>标签：</span>
            <Tag color={tag.color}>{tag.name}</Tag>
            &nbsp;&nbsp;
            <CopyOutlined />
            <span>文章类别：</span>
            <Tag color={type.color}>{type.name}</Tag>
          </span>
          <Link
            className="article-sort-item-info-title"
            to={`${ARTICLE_DETAIL}/${id}`}
          >
            {articleTitle}
          </Link>
        </div>
      </div>
    </>
  );
}
