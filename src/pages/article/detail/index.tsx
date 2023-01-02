import { getArticleDetail } from '@/service';
import { Skeleton } from 'antd';
import { useParams, useRequest } from 'umi';
import './index.less';

interface IArticleDetailParams {
  articleId: string;
}

export default function ArticleDetail() {
  const { articleId }: IArticleDetailParams = useParams();
  const { data, loading } = useRequest(() =>
    getArticleDetail({ id: articleId }),
  );

  return (
    <Skeleton loading={loading} active={true}>
      <div className="article-wrapper">
        <div className="article-wrapper-left">
          <div className="article-container">
            <div className="article-title">{data?.title}</div>
            <div className="article-sub-description">
              <div className="article-time">
                <div className="article-time-created">
                  创建时间:{data?.created_at}
                </div>
                <div className="article-time-updated">
                  最新修改时间:{data?.updated_at}
                </div>
              </div>
            </div>

            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: data?.content_html }}
            ></div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}