import { MAIN_PAGE, T_F_NOT_FOUND } from '@/constants';
import { tracert } from '@/service';
import { Button, Result } from 'antd';
import { history, useRequest } from 'umi';
import './index.less';

export default function NotFound() {
  useRequest(() => tracert(T_F_NOT_FOUND));

  const handleOnBackHome = () => {
    history.replace(`${MAIN_PAGE}`);
  };
  return (
    <div className="NotFound-container">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleOnBackHome}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}
