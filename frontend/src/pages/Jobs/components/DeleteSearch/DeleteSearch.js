import React from 'react'
import { Button } from 'antd'
import useRequest from '@ahooksjs/use-request'
import * as api from '../../../../services/donestreet/searches'
import { DeleteOutlined } from "@ant-design/icons"
import { useSearches } from '../SearchesList/SearchesList'

const deleteSearches = (id, getSearches) => async () => {
  await api.deleteSearches(id)
  getSearches()
}

export default function DeleteSearch({ id }) {
  const { run: getSearches } = useSearches()

  const { run } = useRequest(
    deleteSearches(id, getSearches),
    { manual: true }
  )

  return (
    <Button
      shape="circle"
      type="danger"
      icon={<DeleteOutlined />}
      onClick={run}
    />
  )
}
