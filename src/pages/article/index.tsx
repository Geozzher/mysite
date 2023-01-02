import './index.less';
import { Skeleton, Affix, Pagination, Empty } from 'antd';
import { history, useParams, useRequest } from 'umi';
import { getArticleList, getArticleTypes, getArticleTags } from '@/service';
import ArticleListItem from '@/components/ArticleListItem';
import ArticleTypes from '@/components/ArticleTypes';
import ArticleTags from '@/components/ArticleTags';
import { useState } from 'react';
import { ARTICLE_LIST } from '@/constants';
import ArticleMusic from '@/components/ArticleMusic';

interface IArticleListPageParams {
  pageId: string;
}

export default function Article() {
  const { pageId }: IArticleListPageParams = useParams();
  const [pageNum, setPageNum] = useState<string>(pageId);
  const [pageSize] = useState<number>(15);
  const { data, loading } = useRequest(
    () => getArticleList({ current: pageId, pageSize }),
    { refreshDeps: [pageNum] },
  );
  const { data: typeList = [] } = useRequest(getArticleTypes);
  const { data: tagList = [] } = useRequest(getArticleTags);

  const handleOnPageNumChange = (pageNum: number, pageSize: number) => {
    setPageNum(String(pageNum));
    history.replace(`${ARTICLE_LIST}/${pageNum}`);
  };

  return (
    <Skeleton loading={loading} active={true}>
      <div className="article-wrapper">
        <div className="article-wrapper-left">
          <div className="article-list-container">
            {data?.list.length ? (
              <div>
                {data.list.map((listItem: IArticleListItemProps) => {
                  return (
                    <ArticleListItem
                      key={listItem.id}
                      {...listItem}
                    ></ArticleListItem>
                  );
                })}

                <div className="article-list-pagenation-container">
                  <Pagination
                    className="article-list-pagenation"
                    current={Number(pageNum)}
                    total={data?.pageInfo.total}
                    pageSize={pageSize}
                    showSizeChanger={false}
                    showTotal={(total) => `共${total}页`}
                    onChange={handleOnPageNumChange}
                    hideOnSinglePage={true}
                  />
                </div>
              </div>
            ) : (
              <Empty />
            )}
          </div>
        </div>
        <div className="article-wrapper-right">
          <Affix offsetTop={64} className="article-wrapper-right-affix">
            <div>
              {ArticleMusic()}
              {ArticleTypes(typeList)}
              {ArticleTags(tagList)}
              {/* <ContactMe></ContactMe> */}
            </div>
          </Affix>
          <div className="article-wrapper-right-mobile">
            {ArticleMusic()}
            {ArticleTypes(typeList)}
            {ArticleTags(tagList)}
            {/* <ContactMe></ContactMe> */}
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
