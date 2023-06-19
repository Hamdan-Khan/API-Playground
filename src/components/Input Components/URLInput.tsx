import useStore from "../../store/store";
import { useEffect, useState } from "react";

const URLInput = ({ submitHandler }: { submitHandler: () => void }) => {
  // states
  const setMethod = useStore((state) => state.setMethod);
  const setUrl = useStore((state) => state.setUrl);
  const method = useStore((state) => state.method);
  const query = useStore((state) => state.query);

  const [localURL, setLocalURL] = useState("");

  useEffect(() => {
    const urlWithoutQuery = localURL.substring(
      0,
      localURL.includes("?") ? localURL.indexOf("?") : localURL.length
    );
    console.log(localURL);
    console.log(urlWithoutQuery);

    setLocalURL(`${urlWithoutQuery}${query}`);
  }, [query]);

  useEffect(() => {
    setUrl(localURL);
  }, [localURL]);

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
        name="url"
        value={localURL}
        className="focus:outline-none flex-grow bg-white px-4 py-1 border border-zinc-300"
        onChange={(e) => setLocalURL(e.target.value)}
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

export default URLInput;
