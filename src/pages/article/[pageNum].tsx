import './index.less';
import { Spin } from 'antd';
import { useParams, useRequest } from 'umi';
import { getArticleList, getArticleTypes, getTags } from '@/service';
import ArticleListItem from '@/components/ArticleListItem';
import ArticleTypes from '@/components/ArticleTypes';
import ArticleTags from '@/components/ArticleTags';

interface IArticleListPageParams {
  pageNum: string;
}

export default function Article() {
  const { pageNum }: IArticleListPageParams = useParams();
  const { data: articleList = [], loading } = useRequest(() =>
    getArticleList({ pageNum }),
  );
  const { data: typeList = [] } = useRequest(getArticleTypes);
  const { data: tagList = [] } = useRequest(getTags);
  return (
    <Spin spinning={loading}>
      <div className="article-wrapper">
        <div className="article-wrapper-left">
          <div className="article-list-container">
            {articleList &&
              articleList.map((listItem: IArticleListItemProps) => {
                return (
                  <ArticleListItem
                    key={listItem.id}
                    {...listItem}
                  ></ArticleListItem>
                );
              })}
          </div>
        </div>
        <div className="article-wrapper-right">
          {ArticleTypes(typeList)}
          {ArticleTags(tagList)}
          {/* <ContactMe></ContactMe> */}
        </div>
      </div>
    </Spin>
  );
}
