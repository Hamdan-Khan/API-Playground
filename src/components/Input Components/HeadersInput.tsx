import useStore from "../../store/store";
import KeyValueInput from "./KeyValueInput";
import { useState, useMemo, useEffect } from "react";

const HeadersInput = ({ tab }: { tab: number }) => {
  const setHeaders = useStore((state) => state.setHeaders);

  const auth = useStore((state) => state.auth);

  const [headerInputs, setHeaderInputs] = useState([
    { key: "Content-Type", value: "application/json" },
  ]);

  const headerObject = useMemo(() => {
    return headerInputs.reduce((acc, curr) => {
      if (curr.key !== "" && curr.value !== "") {
        acc[curr.key] = curr.value;
      }
      return acc;
    }, {} as { [key: string]: string });
  }, [headerInputs]);

  useEffect(() => {
    const updatedHeaderObject = { ...headerObject };

    if (
      (auth.includes("Basic ") &&
        !auth.includes("Basic Og==") &&
        auth.length > 6) ||
      (auth.includes("Bearer ") && auth.length > 7)
    ) {
      updatedHeaderObject["Authorization"] = auth;
    }

    setHeaders(updatedHeaderObject);
  }, [headerObject, auth]);

  return (
    <div className={`${tab == 3 ? "block" : "hidden"}`}>
      <h1 className="ml-4 text-lg pt-2">HTTP Headers</h1>
      <KeyValueInput inputs={headerInputs} setInputs={setHeaderInputs} />
    </div>
  );
};

export default HeadersInput;
