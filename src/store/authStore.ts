import { create } from "zustand";
import { AuthType } from "@/types/authType";

const useAuthStore = create<AuthType>((set) => ({
    token: "",
    isLoading: false,
    setToken: (token: AuthType["token"]) => set({ token }),
    removeToken: () => set({ token: "" })
}));

export default useAuthStore;