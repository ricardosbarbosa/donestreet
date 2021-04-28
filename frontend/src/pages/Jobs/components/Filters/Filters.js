import React from 'react'
import { Space } from 'antd'
import { SaveSearch } from '../SaveSearch'
import LocationSelect, { LocationProvider, useLocation } from '../LocationSelect/LocationSelect'
import DescriptionSelect, { DescriptionProvider, useDescription } from '../DescriptionSelect/DescriptionSelect'

export function FiltersProvider({ children }) {
  return (
    <LocationProvider>
      <DescriptionProvider>
        {children}
      </DescriptionProvider>
    </LocationProvider>
  )
}


export default function Filters() {
  const { setLocation } = useLocation()
  const { setDescription } = useDescription()
  
  return (
    <Space style={{ width: "100%" }}>
      <LocationSelect onChange={setLocation} />
      <DescriptionSelect onChange={setDescription} />
      <SaveSearch />
    </Space>
  )
}

