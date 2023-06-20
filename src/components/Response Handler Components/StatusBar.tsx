import useStore from "../../store/store";

const StatusBar = () => {
  const status = useStore((state) => state.status);
  return (
    <div
      className={`flex gap-10 py-3 text-lg font-medium ${
        status?.code && status?.code < 300 && status?.code > 199
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      <p>
        <span className="text-black">Status: </span>
        {status?.code ? status?.code : ""} {status?.statusText}
      </p>
      <p>
        <span className="text-black">Size: </span> {status?.size}
      </p>
      <p>
        <span className="text-black">Time: </span> {status?.time}
      </p>
    </div>
  );
};

export default StatusBar;
