import axios from "@/utils/axios";

export function $register(params) {
  return axios.post(`/api/auth/register`, params);
}

export function $login(params) {
  return axios.post(`/api/auth/login`, params);
}

export function $getUser() {
  return axios.get(`/api/auth/getUser`);
}

export function $logout() {
  return axios.post(`/api/auth/logout`);
}
