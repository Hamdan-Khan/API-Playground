import useStore from "../../store/store";

const RequestBody = ({ tab }: { tab: number }) => {
  const reqBody = useStore((state) => state.reqBody);
  const setReqBody = useStore((state) => state.setReqBody);

  return <div className={`${tab == 2 ? "block" : "hidden"}`}>RequestBody</div>;
};

export default RequestBody;
