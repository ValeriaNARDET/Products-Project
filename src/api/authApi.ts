import { axiosInstance } from "./axios";

const userLogin = async (username: string, password: string) => {
    const payload = { username, password }
    const result = await axiosInstance.post(`/auth`, {data: payload})
    return result.data;
}

export default userLogin;
