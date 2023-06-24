import axios from "utils/axios";
const getChatText = async (text) => {
  const data = await axios.post("api/app/getChatText", { message: text });
  return data;
};
export { getChatText };
