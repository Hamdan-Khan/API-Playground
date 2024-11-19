import useStore from "../../store/store";
import DynamicFields from "./DynamicFields";
import { useState, useEffect } from "react";

const QueryProp = ({ tab }: { tab: number }) => {
  const setQuery = useStore((state) => state.setQuery);

  const [queryInput, setQueryInput] = useState([{ key: "", value: "" }]);

  useEffect(() => {
    const queries = queryInput
      .filter((q) => q.key !== "" || q.value !== "") // Include if either is non-empty
      .map(
        (q) =>
          `${encodeURIComponent(q.key)}=${encodeURIComponent(
            q.value
          )}`.replace(/=$/, "") // Remove "=" if the value is empty
      )
      .join("&");

    const queryString = queries ? `?${queries}` : "";
    setQuery(queryString);
  }, [queryInput, setQuery]);


  const clearQueries = () => {
    setQuery("");
    setQueryInput([{ key: "", value: "" }]);
  };

  return (
    <div className={`${tab == 1 ? "block" : "hidden"}`}>
      {queryInput[0].key !== "" && queryInput[0].value !== "" && (
       <>
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
