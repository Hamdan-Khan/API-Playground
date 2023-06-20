import { useState } from "react";
import RequestBody from "./RequestBody";
import AuthProp from "./AuthProp";
import QueryProp from "./QueryProp";
import HeadersProp from "./HeadersProp";

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
          Query
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
          Headers
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
        <QueryProp tab={tab} />
        <RequestBody tab={tab} />
        <HeadersProp tab={tab} />
        <AuthProp tab={tab} />
      </div>
    </div>
  );
};

export default PropsInput;
