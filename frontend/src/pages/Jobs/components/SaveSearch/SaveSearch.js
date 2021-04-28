import React from 'react'
import { Button } from 'antd'
import { useLocation } from '../LocationSelect/LocationSelect'
import { useDescription } from '../DescriptionSelect/DescriptionSelect'
import useRequest from '@ahooksjs/use-request'
import * as api from '../../../../services/donestreet/searches'
import { useSearches } from '../SearchesList/SearchesList'

const postSearches = (location, description, getSearches) => async () => {
  await api.postSearches({ location, description })
  getSearches()
}
export default function SaveSearch() {
  const { location } = useLocation()
  const { description } = useDescription()
  const { run: getSearches } = useSearches()

  const { run } = useRequest(
    postSearches(location, description, getSearches),
    { manual: true }
  )

  return (
    <Button
      type="primary"
      onClick={run}
      disabled={!location || !description}
    >
      Save Search
    </Button>
  )
}
