import axios from "axios";

const axiosInstance = axios.create();
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkQG91dGxvb2suY29tIiwiaWF0IjoxNzMwMDUyMjk3LCJleHAiOjE3MzAwNTU4OTd9.0Esx681e6Hw8-U55ArUMRQNHUqX0EK8LrLzVhYexT68"
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = "https://test.neuraac.com/api";
  config.headers.Authorization = `Bearer ${token}`;
  config.signal = AbortSignal.timeout(5000);
  return config;
});

export default axiosInstance;
