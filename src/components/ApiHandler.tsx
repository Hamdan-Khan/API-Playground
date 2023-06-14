import useStore from "../store/store";
import "react-json-view-lite/dist/index.css";
import UrlInput from "./UrlInput";
import JsonViewer from "./JsonViewer";
import StatusBar from "./StatusBar";

const ApiHandler = () => {
  const data = useStore((state) => state.data);

  return (
    <div className="p-4">
      <UrlInput />
      <StatusBar />
      <div className="h-[400px] border border-zinc-300 overflow-auto bg-[#eee] mt-3">
        {!data && (
          <div className="flex h-full justify-center items-center">
            <h1 className="text-3xl font-light text-zinc-500">
              Run requests to get result
            </h1>
          </div>
        )}
        {data && <JsonViewer />}
      </div>
    </div>
  );
};

export default ApiHandler;
