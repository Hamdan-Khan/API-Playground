import useStore from "../../store/store";
import DynamicFields from "./DynamicFields";
import { useState, useMemo, useEffect } from "react";

const HeadersProp = ({ tab }: { tab: number }) => {
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
      (auth.startsWith("Basic ") && auth !== "Basic Og==") ||
      auth.startsWith("Bearer ")
    ) {
      updatedHeaderObject["Authorization"] = auth;
    }
  
    setHeaders(updatedHeaderObject);
  }, [headerObject, auth, setHeaders]);

  return (
    <div className={`${tab == 3 ? "block" : "hidden"}`}>
      <h1 className="ml-4 text-lg pt-2">HTTP Headers</h1>
      <DynamicFields inputs={headerInputs} setInputs={setHeaderInputs} />
    </div>
  );
};

export default HeadersProp;
