import { useState, useEffect } from "react";
import NoneAuth from "./Auth Components/NoneAuth";
import BasicAuth from "./Auth Components/BasicAuth";
import BearerAuth from "./Auth Components/BearerAuth";
import useStore from "../../store/store";

const AuthInput = ({ tab }: { tab: number }) => {
  const [authType, setAuthType] = useState<number>(1);
  const setAuth = useStore((state) => state.setAuth);
  const auth = useStore((state) => state.auth);
  const headers = useStore((state) => state.headers);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [bearerToken, setBearerToken] = useState<string>("");

  useEffect(() => {
    console.log(headers);
  }, [auth]);

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [bearerToken]);

  return (
    <div
      className={`${
        tab == 4 ? "block" : "hidden"
      } border border-t-0 border-zinc-300 py-3`}
    >
      <ul className="flex flex-row pl-6">
        <li
          className={`text-center mr-10 sm:mr-14 px-2 text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            authType == 1 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setAuthType(1)}
        >
          None
        </li>
        <li
          className={`text-center mr-10 sm:mr-14 px-2 text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            authType == 2 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setAuthType(2)}
        >
          Basic
        </li>
        <li
          className={`text-center mr-10 sm:mr-14 px-2 text-lg cursor-pointer border-b-[3px] border-b-transparent ${
            authType == 3 ? "!border-b-blue-500" : ""
          }`}
          onClick={() => setAuthType(3)}
        >
          Bearer
        </li>
      </ul>
      <div className="px-4">
        {authType == 1 && <NoneAuth />}
        {authType == 2 && (
          <BasicAuth
            setAuth={setAuth}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
        {authType == 3 && (
          <BearerAuth
            token={bearerToken}
            setToken={setBearerToken}
            setAuth={setAuth}
          />
        )}
      </div>
    </div>
  );
};

export default AuthInput;
