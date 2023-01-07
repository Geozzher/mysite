import { NOT_FOUND, T_F_ARTICLE_DETAIL } from '@/constants';
import { getArticleDetail, tracert, updateArticleView } from '@/service';
import { Skeleton, Typography } from 'antd';
import { useParams, useRequest, history } from 'umi';
import './index.less';

const { Paragraph } = Typography;
interface IArticleDetailParams {
  articleId: string;
}

export default function ArticleDetail() {
  const { articleId }: IArticleDetailParams = useParams();
  const { data, loading } = useRequest(() => {
    tracert(T_F_ARTICLE_DETAIL);
    updateArticleView({ id: articleId });
    return getArticleDetail({ id: articleId });
  });

  return (
    <Skeleton loading={loading} active={true}>
      {data === null ? (
        history.push(NOT_FOUND)
      ) : (
        <div className="article-detail-wrapper">
          <div className="article-detail-wrapper-left">
            <div className="article-container">
              <div className="article-title">{data?.title}</div>
              <div className="article-sub-description">
                <div className="article-time">
                  <div className="article-time-created">
                    文章创建时间：{data?.created_at}
                  </div>
                  <div className="article-time-updated">
                    最新修改时间：{data?.article_updated_at}
                  </div>
                </div>
              </div>
              <Paragraph>
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: data?.content_html }}
                ></div>
              </Paragraph>
            </div>
          </div>
        </div>
      )}
    </Skeleton>
  );
}
