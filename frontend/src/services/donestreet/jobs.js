import axios from "./axios"

export const getGithubJobspositions = (params) => {
  return axios.get("/jobs", { params })
    .then(response => ({
      ...response,
      page: params?.page || 0,
      noMore: response.data.length === 0
    }))
}

