import React, { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const DescriptionContextState = React.createContext()

export function DescriptionProvider({ children }) {
  const [description, setDescription] = useState("")
  return (
    <DescriptionContextState.Provider value={{ description, setDescription }}>
      {children}
    </DescriptionContextState.Provider>
  )
}

export function useDescription() {
  const context = React.useContext(DescriptionContextState)
  if (context === undefined) {
    throw new Error(
      "useDescription must be used within a DescriptionContextState"
    )
  }
  return context
}

export default function DescriptionSelect({ onChange }) {
  const { description } = useDescription()
  return (
    <Select value={description} onChange={onChange} style={{width: 200 }}>
      <Option value={""}>All descriptions</Option>
      <Option value="Javascript">Javascript</Option>
      <Option value="Java">Java</Option>
      <Option value="Python">Python</Option>
      <Option value="React">React</Option>
      <Option value="Ruby">Ruby</Option>
      <Option value="Go">Go</Option>
    </Select>
  )
}
