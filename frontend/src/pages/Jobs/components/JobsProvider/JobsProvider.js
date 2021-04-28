import useRequest from '@ahooksjs/use-request'
import React from 'react'
import { getGithubJobspositions } from '../../../../services/donestreet/jobs'

const JobsContextState = React.createContext()
const JobsContextDispatch = React.createContext()
const JobsContextActions = React.createContext()

export default function JobsProvider({ children }) {
  
  useRequest(getGithubJobspositions)

  return (
    <JobsContextState.Provider>
      {children}
    </JobsContextState.Provider>
  )
}


/** hooks */
function useJobsContextState() {
  const context = React.useContext(JobsContextState)
  if (context === undefined) {
    throw new Error(
      "useJobsContextState must be used within a JobsContextState"
    )
  }
  return context
}

export { useJobsContextState }
