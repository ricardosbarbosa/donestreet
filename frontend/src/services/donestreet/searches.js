import axios from "./axios"

export const getSearches = () => axios.get("/searches")
export const postSearches = (data) => axios.post("/searches", data)
export const deleteSearches = (id) => axios.delete(`/searches/${id}`)
