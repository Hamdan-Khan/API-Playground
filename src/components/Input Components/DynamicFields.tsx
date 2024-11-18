import { useEffect, useRef } from "react";

type Input = { key: string; value: string }[];

const DynamicFields = ({
  inputs,
  setInputs,
}: {
  inputs: Input;
  setInputs: (newInput: Input) => void;
}) => {
  const handleInputChange = (index: number, key: string, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = { key, value };
  
    // Remove subsequent empty inputs
    let updatedInputs = newInputs.filter(
      (input, i) =>
        input.key !== "" || input.value !== "" || i === newInputs.length - 1
    );
  
    // Add a new empty input if the last input is not empty
    if (index === inputs.length - 1 && (key !== "" || value !== "")) {
      updatedInputs = [...updatedInputs, { key: "", value: "" }];
    }
  
    setInputs(updatedInputs);
  };

  useEffect(() => {
    if (
      inputs.length === 0 ||
      (inputs[0].key !== "" && inputs[0].value !== "")
    ) {
      setInputs([...inputs, { key: "", value: "" }]);
    }
  }, []);

  // ref to container
  const containerRef = useRef<any>(null);

  // scrolls down to the latest input field whenever new input field is added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [inputs]);

  return (
    <div className="max-h-[200px] overflow-auto" ref={containerRef}>
      {inputs.map((input, index) => (
        <div key={index} className="flex flex-row w-full gap-3 px-3 my-2">
          <input
            className="border flex-grow border-zinc-300 px-3 py-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="parameter"
            value={input.key}
            onChange={(e) =>
              handleInputChange(index, e.target.value, input.value)
            }
          />
          <input
            className="border flex-grow border-zinc-300 px-3 py-2 rounded-lg focus:outline-none"
            type="text"
            placeholder="value"
            value={input.value}
            onChange={(e) =>
              handleInputChange(index, input.key, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicFields;
