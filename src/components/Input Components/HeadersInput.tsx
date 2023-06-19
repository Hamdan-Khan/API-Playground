import useStore from "../../store/store";
import KeyValueInput from "./KeyValueInput";
import { useState, useEffect } from "react";

const HeadersInput = ({ tab }: { tab: number }) => {
  const setHeaders = useStore((state) => state.setHeaders);

  const [headerInputs, setHeaderInputs] = useState([
    { key: "Content-Type", value: "application/json" },
  ]);

  useEffect(() => {
    const headerObject: { [key: string]: string } = headerInputs.reduce(
      (acc, curr) => {
        if (curr.key !== "" && curr.value !== "") {
          acc[curr.key] = curr.value;
        }
        return acc;
      },
      {} as { [key: string]: string }
    );

    setHeaders(headerObject);
  }, [headerInputs, setHeaders]);

  return (
    <div className={`${tab == 3 ? "block" : "hidden"}`}>
      <h1 className="ml-4 text-lg pt-2">HTTP Headers</h1>
      <KeyValueInput inputs={headerInputs} setInputs={setHeaderInputs} />
    </div>
  );
};

export default HeadersInput;
