import './index.less';
import { Spin, Affix, Pagination } from 'antd';
import { history, useParams, useRequest } from 'umi';
import { getArticleList, getArticleTypes, getTags } from '@/service';
import ArticleListItem from '@/components/ArticleListItem';
import ArticleTypes from '@/components/ArticleTypes';
import ArticleTags from '@/components/ArticleTags';
import { useEffect, useState } from 'react';
import { ARTICLE_LIST } from '@/constants';

interface IArticleListPageParams {
  pageId: string;
}

export default function Article() {
  const { pageId }: IArticleListPageParams = useParams();
  const [pageNum, setPageNum] = useState<string>(pageId);
  const [pageSize] = useState<number>(15);
  const { data, loading } = useRequest(
    () => getArticleList({ pageNum: pageId, pageSize }),
    { refreshDeps: [pageNum] },
  );
  const { data: typeList = [] } = useRequest(getArticleTypes);
  const { data: tagList = [] } = useRequest(getTags);

  const handleOnPageNumChange = (pageNum: number, pageSize: number) => {
    setPageNum(String(pageNum));
    history.replace(`${ARTICLE_LIST}/${pageNum}`);
  };

  return (
    <Spin spinning={loading}>
      <div className="article-wrapper">
        <div className="article-wrapper-left">
          <div className="article-list-container">
            {data?.dataList &&
              data.dataList.map((listItem: IArticleListItemProps) => {
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
                total={data?.pagenationInfo.total}
                pageSize={pageSize}
                showSizeChanger={false}
                showTotal={(total) => `共${total}页`}
                onChange={handleOnPageNumChange}
                hideOnSinglePage={true}
              />
            </div>
          </div>
        </div>
        <div className="article-wrapper-right">
          <Affix offsetTop={64}>
            <div>
              {ArticleTypes(typeList)}
              {ArticleTags(tagList)}
              {/* <ContactMe></ContactMe> */}
            </div>
          </Affix>
        </div>
      </div>
    </Spin>
  );
}
