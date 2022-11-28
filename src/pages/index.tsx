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
                extra={<a href={recommendItem.href}>了解更多</a>}
                style={{ width: 300 }}
              >
                <p>{recommendItem.content}</p>
              </Card>
            );
          })}
        </div>
      </Spin>
    </div>
  );
}
