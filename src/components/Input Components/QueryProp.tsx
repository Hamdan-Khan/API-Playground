import useStore from "../../store/store";
import DynamicFields from "./DynamicFields";
import { useState } from "react";

const QueryProp = ({ tab }: { tab: number }) => {
  const setQuery = useStore((state) => state.setQuery);

  const [queryInput, setQueryInput] = useState([{ key: "", value: "" }]);

  // converts queryInput object into query state i.e URL format string (?pages=10&offset=20)
  const addQueries = () => {
    const queries =
      "?" +
      queryInput
        .filter((q) => q.key !== "" && q.value !== "")
        .map(
          (q) => `&${encodeURIComponent(q.key)}=${encodeURIComponent(q.value)}`
        )
        .join("");
    setQuery(queries);
  };
  const clearQueries = () => {
    setQuery("");
    setQueryInput([{ key: "", value: "" }]);
  };
  return (
    <div className={`${tab == 1 ? "block" : "hidden"}`}>
      {queryInput[0].key !== "" && queryInput[0].value !== "" && (
        <>
          <button
            className="bg-green-500 mt-2 ml-4 px-5 py-1 font-semibold text-white rounded-md"
            onClick={addQueries}
          >
            Add Queries
          </button>
          <button
            className="bg-red-500 mt-2 ml-4 px-5 py-1 font-semibold text-white rounded-md"
            onClick={clearQueries}
          >
            Clear Queries
          </button>
        </>
      )}
      <DynamicFields inputs={queryInput} setInputs={setQueryInput} />
    </div>
  );
};

export default QueryProp;
