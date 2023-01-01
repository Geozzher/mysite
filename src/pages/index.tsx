import './index.less';
import { Card, Spin } from 'antd';
import Banner from '@/components/Banner';
import { useRequest } from 'umi';
import { getRecommend } from '@/service';

export default function mainPage() {
  const { data: recommendList = [], loading } = useRequest(() =>
    getRecommend(),
  );

  return (
    <div>
      <Banner></Banner>
      <Spin spinning={loading}>
        <div className="recommend-card-container">
          {recommendList.map((recommendItem: any) => {
            return (
              <Card
                className="recommend-card-item"
                title={recommendItem.title}
                key={recommendItem.id}
                extra={
                  <a href={recommendItem.goto_url}>{recommendItem.goto_text}</a>
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: recommendItem.description,
                  }}
                ></div>
              </Card>
            );
          })}
        </div>
      </Spin>
    </div>
  );
}
