import { useEffect } from "react";
const BearerAuth = ({
  setAuth,
  token,
  setToken,
}: {
  setAuth: any;
  token: string;
  setToken: any;
}) => {
  useEffect(() => {
    setAuth("Bearer " + token);
  }, [token]);
  return (
    <div>
      <h1 className="text-xl px-3 font-light py-2">Bearer Token</h1>
      <textarea
        className="w-full focus:outline-none border border-zinc-300 px-3 py-2 rounded-lg"
        value={token}
        placeholder="Enter token"
        onChange={(e) => setToken(e.target.value)}
      ></textarea>
    </div>
  );
};

export default BearerAuth;
