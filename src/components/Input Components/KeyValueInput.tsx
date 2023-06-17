import { useState } from "react";

const KeyValueInput = () => {
  const [inputs, setInputs] = useState([{ key: "", value: "" }]);

  const handleInputChange = (index: number, key: string, value: any) => {
    const newInputs = [...inputs];
    newInputs[index] = { key, value };

    // Remove subsequent empty inputs
    let updatedInputs = newInputs.filter(
      (input, i) =>
        input.key !== "" || input.value !== "" || i === newInputs.length - 1
    );

    // Add a new empty input if the last input is not empty
    if (index === inputs.length - 1 && value !== "") {
      updatedInputs = [...updatedInputs, { key: "", value: "" }];
    }

    setInputs(updatedInputs);
  };

  return (
    <div>
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
      <pre>{JSON.stringify(inputs, null, 2)}</pre>
    </div>
  );
};

export default KeyValueInput;
