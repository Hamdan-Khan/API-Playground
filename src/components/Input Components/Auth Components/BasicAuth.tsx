import { useEffect } from "react";
const BasicAuth = ({
  setAuth,
  username,
  password,
  setUsername,
  setPassword,
}: {
  setAuth: any;
  username: string;
  password: string;
  setUsername: any;
  setPassword: any;
}) => {
  useEffect(() => {
    const encoded = btoa(`${username}:${password}`);
    setAuth("Basic " + encoded);
  }, [username, password]);

  return (
    <div>
      <h1 className="text-xl font-light pt-3 px-3">Basic Authentication</h1>
      <div className="pl-3">
        <div className="flex items-center my-4">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="focus:outline-none border-b border-zinc-300 flex-grow px-3 mx-3"
          />
        </div>
        <div className="flex items-center my-4">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none border-b border-zinc-300 flex-grow px-3 mx-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicAuth;
