const AuthInput = ({ tab }: { tab: number }) => {
  return (
    <div className={`${tab == 4 ? "block" : "hidden"}`}>
      <ul></ul>
    </div>
  );
};

export default AuthInput;
