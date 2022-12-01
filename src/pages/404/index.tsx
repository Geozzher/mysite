import { MAIN_PAGE } from '@/constants';
import { Button, Result } from 'antd';
import { history } from 'umi';
import './index.less';

export default function NotFound() {
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
