import useStore from "../store/store";
import axios from "axios";

const UrlInput = () => {
  const url = useStore((state) => state.url);
  const setUrl = useStore((state) => state.setUrl);
  const method = useStore((state) => state.method);
  const setMethod = useStore((state) => state.setMethod);
  const setData = useStore((state) => state.setData);
  const setStatus = useStore((state) => state.setStatus);

  const submitHandler = async () => {
    try {
      const startTime = new Date().getTime();
      const res = await axios.get(url);
      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;
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
          elapsedTime > 1000 ? `${elapsedTime / 1000} ms` : `${elapsedTime} ms`,
      });
      console.log(res);
    } catch (err: any) {
      setData(err?.response?.data);
      setStatus({
        code: err?.response?.status,
        statusText: err?.response?.statusText,
      });
      console.error(err);
    }
  };
  return (
    <div className="flex flex-row">
      <select
        name="method"
        value={method}
        className="focus:outline-none border-y border-l rounded-l-lg p-1 border-zinc-300"
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
        <option value="PATCH">PATCH</option>
      </select>
      <input
        type="text"
        value={url}
        name="url"
        className="focus:outline-none flex-grow bg-white px-4 py-1 border border-zinc-300"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={submitHandler}
        className="bg-green-500 text-white px-5 py-1 font-semibold rounded-r-lg"
      >
        Send
      </button>
    </div>
  );
};

export default UrlInput;
