import { CalendarOutlined, TagsFilled } from '@ant-design/icons';
import { ARTICLE_DETAIL, ERROR_IMAGE_URL } from '@/constants';
import './index.less';
import { Tag, Image } from 'antd';
import { Link } from 'umi';

export default function ArticleListItem(props: IArticleListItemProps) {
  const { id, cover, title, article_updated_at, tags, types } = props;
  return (
    <>
      <div className="article-sort-item">
        <Image
          className="article-sort-item-img"
          src={cover}
          alt={title}
          width={100}
          height={100}
          fallback={ERROR_IMAGE_URL}
        />
        <Link to={`${ARTICLE_DETAIL}/${id}`}>
          <div className="article-sort-item-info">
            <div className="article-sort-item-info-title">{title}</div>
            <div className="article-sort-item-info-item">
              <CalendarOutlined />
              <span>最近更新时间：</span>
              <time>{article_updated_at}</time>
            </div>
            <div className="article-sort-item-info-item">
              <span>文章类别：{types.label}</span>
            </div>
            <div className="article-sort-item-info-item">
              <TagsFilled />
              <span>标签：</span>
              {tags.map((tag: any) => (
                <Tag color={tag.value}>{tag.label}</Tag>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
