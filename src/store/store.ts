import { create } from "zustand";

type States = {
  url: string;
  data: string;
  status: { code: any; statusText: any; size: any; time: any };
  method: string;
};

type Actions = {
  setUrl: (newUrl: string) => void;
  setData: (newData: any) => void;
  setStatus: (newStatus: any) => void;
  setMethod: (newMethod: string) => void;
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
}));

export default useStore;
