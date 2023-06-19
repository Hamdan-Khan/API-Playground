import { useState } from "react";
import useStore from "../../store/store";
import { Editor } from "@monaco-editor/react";

const RequestBody = ({ tab }: { tab: number }) => {
  // const reqBody = useStore((state) => state.reqBody);
  const setReqBody = useStore((state) => state.setReqBody);

  const [text] = useState<any>("");

  return (
    <div className={`${tab == 2 ? "block" : "hidden"}`}>
      <div>
        <h1 className="text-lg p-2">HTTP body (JSON format)</h1>
        <div>
          <Editor
            height="160px"
            language="json"
            className="border border-zinc-200"
            value={text}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            onChange={(val) => setReqBody(val)}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestBody;
