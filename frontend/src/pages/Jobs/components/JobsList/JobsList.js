import React, { useRef } from 'react'
import { List, Button, Skeleton } from 'antd';
import useRequest from '@ahooksjs/use-request';
import { getGithubJobspositions } from '../../../../services/donestreet/jobs';
import { useLocation } from '../LocationSelect/LocationSelect';
import { useDescription } from '../DescriptionSelect/DescriptionSelect';
import { RightOutlined } from "@ant-design/icons"
import { useHistory } from 'react-router';

export default function JobsList() {
  const history = useHistory()
  const { location } = useLocation()
  const { description } = useDescription()
  const containerRef = useRef(null);

  const { data, loading, loadingMore, loadMore, noMore } = useRequest(
    (params) => {
      return getGithubJobspositions({
        description,
        location,
        page: (params?.page || 0) + 1
      })
    },
    {
      refreshDeps: [location, description],
      loadMore: true,
      cacheKey: 'loadMoreDemoCacheId',
      ref: containerRef,
      isNoMore: data => data.noMore,
      formatResult: response => ({
        list: response.data,
        total: 0, //limitation from github api,
        page: response.page || 0,
        noMore: response.noMore
      })
    },
  );

  const { list = [] } = data || {};

  const ActivityInidicator =
    !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        {!noMore && (
           <Button onClick={loadMore} disabled={loadingMore}>
             {loadingMore ? 'Loading more...' : 'Click to load more'}
           </Button>
         )}
        {noMore && <span>No more data</span>}
      </div>
    ) : null;
  
  const renderJobListItem = (job) => (
    <List.Item
      actions={[
        <Button
          shape="circle"
          type="primary"
          icon={<RightOutlined />}
          onClick={() => history.push({
            pathname: `/jobs/${job.id}`,
            state: job
          })}
        />  
      ]}
    >
      <Skeleton title={false} loading={loading} active>
        <List.Item.Meta               
          title={job.title}
          description={job.company}
        />
      </Skeleton>
    </List.Item>
  )

  return (
    <div ref={containerRef} className="demo-infinite-container" style={{ overflow: 'auto',height: 'calc(100vh - 100px)' }}>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={ActivityInidicator}
        dataSource={list}
        renderItem={renderJobListItem}
      />
    </div>
  );
}

