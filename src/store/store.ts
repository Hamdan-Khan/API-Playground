import { create } from "zustand";

type States = {
  url: string;
  data: string;
};

type Actions = {
  setUrl: (newUrl: string) => void;
  setData: (newData: any) => void;
};

const useStore = create<States & Actions>((set) => ({
  url: "",
  setUrl: (newUrl) => set((state) => ({ url: newUrl })),
  data: "",
  setData: (newData: any) => set((state) => ({ data: newData })),
}));

export default useStore;
