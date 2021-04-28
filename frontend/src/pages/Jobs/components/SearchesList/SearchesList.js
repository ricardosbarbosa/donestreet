import React from 'react'
import { List, Button, Skeleton, Tag } from 'antd';
import useRequest from '@ahooksjs/use-request';
import { useLocation } from '../LocationSelect/LocationSelect';
import { useDescription } from '../DescriptionSelect/DescriptionSelect';
import { RightOutlined } from "@ant-design/icons"
import { getSearches } from '../../../../services/donestreet/searches';
import { DeleteSearch } from '../DeleteSearch';


const SearchesContext = React.createContext()

export function SearchesProvider({ children }) {
  const result = useRequest(getSearches);

  return (
    <SearchesContext.Provider value={result}>
      {children}
    </SearchesContext.Provider>
  )
}

export function useSearches() {
  const context = React.useContext(SearchesContext)
  if (context === undefined) {
    throw new Error(
      "useSearches must be used within a SearchesContext"
    )
  }
  return context
}

export default function SearchesList() {
  const { setLocation } = useLocation()
  const { setDescription } = useDescription()
  
  const { data, loading } = useSearches();

  const { data: list } = data || {};

  return (
    <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={search => (
        <List.Item
          actions={[
            <DeleteSearch id={search._id} />,
            <Button
              shape="circle"
              type="primary"
              icon={<RightOutlined />}
              onClick={() => {
                setLocation(search.location)
                setDescription(search.description)
              }}
            />  
          ]}
        >
          <Skeleton title={true} loading={loading} active>
            <List.Item.Meta
              title={
                <>
                  <Tag>{search.location}</Tag>
                  <Tag>{search.description}</Tag>
                </>
              }
              description={search.ipaddress}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

