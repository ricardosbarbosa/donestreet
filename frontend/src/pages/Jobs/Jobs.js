import React from 'react'
import { Layout, Space } from 'antd';
import { Filters, FiltersProvider, JobDetails, SearchesList, SearchesProvider } from './components';
import { JobsList } from './components/JobsList';

const { Content, Sider } = Layout;

export default function Jobs() {
  return (
    <SearchesProvider>
      <FiltersProvider>
        <Layout style={{ height: "100vh"}}>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider width={300} style={{background: 'white', padding: '10px 10px', height: "calc(100vh - 50px)",overflow: "auto"}} theme="light">
                <SearchesList />
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Filters />              
                  <JobsList />
                  <JobDetails />
                </Space>
              </Content>
            </Layout>
          </Content>          
        </Layout>
      </FiltersProvider>
    </SearchesProvider>
  )
}
