import { getArticleDetail } from '@/service';
import { Spin } from 'antd';
import { useParams, useRequest } from 'umi';

interface IArticleDetailParams {
  articleId: string;
}

export default function ArticleDetail() {
  const { articleId }: IArticleDetailParams = useParams();
  const { data, loading } = useRequest(() =>
    getArticleDetail({ id: articleId }),
  );

  return (
    <Spin spinning={loading}>
      <div className="article-wrapper">
        <div className="article-wrapper-left">
          <div
            className="article-container"
            dangerouslySetInnerHTML={{ __html: data?.content_html }}
          ></div>
        </div>
      </div>
    </Spin>
  );
}
