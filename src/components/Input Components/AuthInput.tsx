const AuthInput = ({ tab }: { tab: number }) => {
  return <div className={`${tab == 4 ? "block" : "hidden"}`}>Auth Input</div>;
};

export default AuthInput;
