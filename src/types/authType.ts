export type AuthType = {
    token: string | null;
    isLoading: boolean;
    setToken: (token: string) => void;
    removeToken: () => void
}