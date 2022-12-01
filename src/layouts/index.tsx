import React from 'react';
import { Layout, Menu, Image, Spin, BackTop } from 'antd';
import { useRequest, history } from 'umi';
import { getNavMenuItems } from '@/service';
import './index.less';
import beian from './imgs/beian.png';

const { Header, Content, Footer } = Layout;

const App: React.FC = (props) => {
  const {
    data: menuList = [],
    error,
    loading,
  } = useRequest(() => getNavMenuItems());

  return (
    <Spin spinning={loading}>
      <Layout className="site-layout">
        <Header
          className="site-layout-header"
          style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            onClick={(menu) => {
              history.replace(menu.key);
            }}
            items={menuList.map((menu: any) => ({
              key: menu.key,
              label: menu.label,
            }))}
          />
        </Header>
        <Content className="site-layout-content">
          <BackTop />
          <div className="site-layout-background">{props.children}</div>
        </Content>
        <Footer className="site-layout-footer">
          <a> 皖ICP备2021017265号</a>
          <a>
            <span>
              <Image src={beian} alt="error" width={12} height={12} />
            </span>
            皖公网安备34122202000327
          </a>
        </Footer>
      </Layout>
    </Spin>
  );
};

export default App;
