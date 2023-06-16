import { useState } from "react";
import RequestBody from "./RequestBody";
import QueryInput from "./QueryInput";
import HeadersInput from "./HeadersInput";
import AuthInput from "./AuthInput";

const PropsInput = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="flex flex-col">
      <ul className="flex flex-row justify-between w-full border-b border-zinc-300 mt-2">
        <li
          className={`flex-grow text-center text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            tab == 1 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setTab(1)}
        >
          Headers
        </li>
        <li
          className={`flex-grow text-center text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            tab == 2 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setTab(2)}
        >
          Body
        </li>
        <li
          className={`flex-grow text-center text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            tab == 3 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setTab(3)}
        >
          Query
        </li>
        <li
          className={`flex-grow text-center text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            tab == 4 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setTab(4)}
        >
          Auth
        </li>
      </ul>
      <div>
        <RequestBody tab={tab} />
        <QueryInput tab={tab} />
        <HeadersInput tab={tab} />
        <AuthInput tab={tab} />
      </div>
    </div>
  );
};

export default PropsInput;
