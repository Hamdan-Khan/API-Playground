import { create } from "zustand";

type States = {
  url: string;
  data: string;
  status: { code: any; statusText: any; size: any; time: any };
  method: string;
  error: string;
  loading: boolean;
};

type Actions = {
  setUrl: (newUrl: string) => void;
  setData: (newData: any) => void;
  setStatus: (newStatus: any) => void;
  setMethod: (newMethod: string) => void;
  setError: (newError: string) => void;
  setLoading: (newError: boolean) => void;
};

const useStore = create<States & Actions>((set) => ({
  url: "",
  setUrl: (newUrl) => set(() => ({ url: newUrl })),
  method: "",
  setMethod: (newMethod) => set(() => ({ method: newMethod })),
  data: "",
  setData: (newData: any) => set(() => ({ data: newData })),
  status: { code: "", statusText: "", size: "", time: "" },
  setStatus: (newStatus: any) => set(() => ({ status: newStatus })),
  // url input error (not related to response error)
  error: "",
  setError: (newError: string) => set(() => ({ error: newError })),
  loading: false,
  setLoading: (newLoading: boolean) => set(() => ({ loading: newLoading })),
}));

export default useStore;
