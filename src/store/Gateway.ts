import axios from "axios";

const axiosReqs = (url: string) => {
  const getReq = async () => {
    const response = await axios.get(url);
    return response;
  };
  const postReq = async (postData: any) => {
    const response = await axios.post(url, postData);
    return response;
  };
  const patchReq = async (patchData: any) => {
    const response = await axios.patch(url, patchData);
    return response;
  };
  const deleteReq = async () => {
    const response = await axios.delete(url);
    return response;
  };

  return { getReq, postReq, patchReq, deleteReq };
};
export default axiosReqs;
