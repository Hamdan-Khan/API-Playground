import useStore from "../store/store";
import "react-json-view-lite/dist/index.css";
import JsonViewer from "./Response Handler Components/JsonViewer";
import StatusBar from "./Response Handler Components/StatusBar";
import RequestSection from "./RequestSection";

const ApiHandler = () => {
  const data = useStore((state) => state.data);
  const error = useStore((state) => state.error);
  const loading = useStore((state) => state.loading);
  return (
    <div className="p-4">
      <RequestSection />
      <StatusBar />
      <div className="h-[400px] border border-zinc-300 overflow-auto bg-[#eee] mt-3">
        {!data && (
          <div className="flex h-full justify-center items-center">
            {error === "" ? (
              loading ? (
                <h1 className="text-3xl font-light text-zinc-500">
                  Loading...
                </h1>
              ) : (
                <h1 className="text-3xl font-light text-zinc-500">
                  Run requests to get result
                </h1>
              )
            ) : (
              <h1 className="text-3xl font-light text-red-500">{error}</h1>
            )}
          </div>
        )}
        {data && <JsonViewer />}
      </div>
    </div>
  );
};

export default ApiHandler;
