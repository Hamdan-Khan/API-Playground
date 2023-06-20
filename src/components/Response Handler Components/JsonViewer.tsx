import React, { useState } from "react";
import useStore from "../../store/store";
import { JsonView, defaultStyles } from "react-json-view-lite";

const JsonViewer = () => {
  const [expand, setExpand] = useState<boolean>(true);

  const data = useStore((state) => state.data);

  function copyToClipboard(text: string) {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then()
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    }
  }

  const copyJson = async () => {
    copyToClipboard(JSON.stringify(data));
  };
  return (
    <>
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
    </>
  );
};

export default JsonViewer;
