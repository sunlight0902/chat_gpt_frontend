const Config = {
  isDark: false,
};
export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:2000" : "https://";

export default Config;
