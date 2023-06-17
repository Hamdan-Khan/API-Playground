import KeyValueInput from "./KeyValueInput";

const HeadersInput = ({ tab }: { tab: number }) => {
  return (
    <div className={`${tab == 1 ? "block" : "hidden"}`}>
      <KeyValueInput />
    </div>
  );
};

export default HeadersInput;
