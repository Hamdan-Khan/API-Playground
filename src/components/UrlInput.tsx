import axios, { AxiosResponse } from "axios";
import useStore from "../store/store";
import URLInput from "./Input Components/URLInput";
import PropsInput from "./Input Components/PropsInput";

const UrlInput = () => {
  // states
  const url = useStore((state) => state.url);
  const method = useStore((state) => state.method);
  const setData = useStore((state) => state.setData);
  const setStatus = useStore((state) => state.setStatus);
  const setError = useStore((state) => state.setError);
  const setLoading = useStore((state) => state.setLoading);

  // send request function
  const submitHandler = async () => {
    console.log(method);

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
      let res: AxiosResponse<any> | null = null;
      if (method === "GET") {
        res = await axios.get(url);
      } else if (method === "POST") {
        res = await axios.post(url, {
          /* body data */
        });
      } else if (method === "PUT") {
        res = await axios.put(url, {
          /* body data */
        });
      } else if (method === "DELETE") {
        res = await axios.delete(url);
      } else if (method === "PATCH") {
        res = await axios.patch(url, {
          /* body data */
        });
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
      console.log(res);
    } catch (err: any) {
      setData(err?.response?.data);
      setStatus({
        code: err?.response?.status,
        statusText: err?.response?.statusText,
      });
      if (err?.code == "ERR_NETWORK") {
        setError("ERR: NO NETWORK CONNECTION");
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

export default UrlInput;
