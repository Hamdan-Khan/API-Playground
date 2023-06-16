const QueryInput = ({ tab }: { tab: number }) => {
  return <div className={`${tab == 3 ? "block" : "hidden"}`}>QueryInput</div>;
};

export default QueryInput;
