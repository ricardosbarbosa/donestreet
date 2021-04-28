import React, { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const LocationContextState = React.createContext()

export function LocationProvider({ children }) {
  const [location, setLocation] = useState("")
  return (
    <LocationContextState.Provider value={{ location, setLocation }}>
      {children}
    </LocationContextState.Provider>
  )
}

export function useLocation() {
  const context = React.useContext(LocationContextState)
  if (context === undefined) {
    throw new Error(
      "useLocation must be used within a LocationContextState"
    )
  }
  return context
}

export default function LocationSelect({ onChange }) {
  const { location } = useLocation()
  return (
    <Select value={location} onChange={onChange} style={{width: 200 }}>
      <Option value={""}>All locations</Option>
      <Option value="Chicago">Chicago</Option>
      <Option value="San Francisco">San Francisco</Option>
      <Option value="Phoenix">Phoenix</Option>
      <Option value="London">London</Option>
      <Option value="Beijing">Beijing</Option>
      <Option value="Paris">Paris</Option>
      <Option value="Boston">Boston</Option>
    </Select>
  )
}
