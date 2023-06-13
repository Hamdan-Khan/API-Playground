import React, { useState } from "react";
import useStore from "../store/store";
import { JsonView, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import UrlInput from "./UrlInput";

const ApiHandler = () => {
  const [expand, setExpand] = useState<boolean>(true);

  const data = useStore((state) => state.data);

  function copyToClipboard(text: string) {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    }
  }

  const copyJson = async () => {
    copyToClipboard(JSON.stringify(data));
  };

  return (
    <div className="p-4">
      <UrlInput />
      {data && (
        <div className="h-[400px] border border-zinc-300 overflow-auto bg-[#eee] mt-3">
          <div className="bg-white border-b border-zinc-300 sticky top-0">
            <button
              className="border-r border-zinc-300 px-3 py-1 bg-zinc-100"
              onClick={() => setExpand(false)}
            >
              Collapse All
            </button>
            <button
              className="border-r border-zinc-300 px-3 py-1 bg-zinc-100"
              onClick={() => setExpand(true)}
            >
              Expand All
            </button>
            <button
              className="border-r border-zinc-300 px-3 py-1 bg-zinc-100"
              onClick={copyJson}
            >
              Copy All
            </button>
          </div>
          <div className="py-3">
            <React.Fragment>
              <JsonView
                data={data}
                shouldInitiallyExpand={() => expand}
                style={defaultStyles}
              />
            </React.Fragment>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiHandler;
