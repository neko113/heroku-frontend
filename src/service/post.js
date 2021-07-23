import axios from "@/utils/axios";

export function getPostList() {
  return axios.get("/api/post");
}

export function getPostDetail(id) {
  return axios.get(`/api/post/${id}`);
}

export function createPost(params) {
  return axios.post("/api/post", params);
}
