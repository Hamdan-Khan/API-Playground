const HeadersInput = ({ tab }: { tab: number }) => {
  return <div className={`${tab == 1 ? "block" : "hidden"}`}>Headers</div>;
};

export default HeadersInput;
