import axios from "@/utils/axios";

export function $getPostList(query) {
  return axios.get(`/api/post?${query}`);
}

export function $getPostDetail(id) {
  return axios.get(`/api/post/${id}`);
}

export function $createPost(params) {
  return axios.post(`/api/post`, params);
}

export function $deletePost(id) {
  return axios.delete(`/api/post/${id}`);
}
