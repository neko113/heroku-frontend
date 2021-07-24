import axios from "@/utils/axios";

export function $get_api() {
  return axios.get("/api/user");
}

export function $post_api(params) {
  return axios.post("/api/user", params);
}
