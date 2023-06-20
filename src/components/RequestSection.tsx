import axios, { AxiosResponse } from "axios";
import useStore from "../store/store";
import URLInput from "./Input Components/URLInput";
import PropsInput from "./Input Components/PropsInput";

const RequestSection = () => {
  // states
  const url = useStore((state) => state.url);
  const method = useStore((state) => state.method);
  const setData = useStore((state) => state.setData);
  const setStatus = useStore((state) => state.setStatus);
  const setError = useStore((state) => state.setError);
  const setLoading = useStore((state) => state.setLoading);
  const reqBody = useStore((state) => state.reqBody);
  const headers = useStore((state) => state.headers);

  // send request function
  const submitHandler = async () => {
    if (url.length < 2) {
      setError("Please enter a valid API URL");
      return;
    }
    setLoading(true);
    setData("");
    setError("");
    setStatus("");

    try {
      const startTime = new Date().getTime();
      const body = reqBody ? JSON.parse(reqBody) : "";
      let res: AxiosResponse<any> | null = null;
      const api = axios.create({
        baseURL: url,
        headers,
      });
      if (method === "GET") {
        res = await api.get("");
      } else if (method === "POST") {
        res = await api.post("", body);
      } else if (method === "PUT") {
        res = await api.put("", body);
      } else if (method === "DELETE") {
        res = await api.delete("");
      } else if (method === "PATCH") {
        res = await api.patch("", body);
      }
      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;
      if (res) {
        setData(res.data);
        const responseSizeInBytes = new TextEncoder().encode(
          JSON.stringify(res.data)
        ).byteLength;
        setStatus({
          code: res.status,
          statusText: res.statusText,
          size:
            responseSizeInBytes > 1024
              ? `${(responseSizeInBytes / 1024).toFixed(2)} KB`
              : `${responseSizeInBytes.toFixed(2)} Bytes`,
          time:
            elapsedTime > 1000
              ? `${elapsedTime / 1000} s`
              : `${elapsedTime} ms`,
        });
      }
    } catch (err: any) {
      setData(err?.response?.data);
      setStatus({
        code: err?.response?.status,
        statusText: err?.response?.statusText,
      });
      if (err?.code == "ERR_NETWORK") {
        setError("ERR: NETWORK ERROR");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <URLInput submitHandler={submitHandler} />
      <PropsInput />
    </div>
  );
};

export default RequestSection;
