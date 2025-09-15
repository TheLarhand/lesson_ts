import axios from "axios";
import type { User } from "../shared/types/User";

const API_URL = "http://localhost:8000/api/users";
const auth = {username: "admin", password: "123"};

export const usersApi = {
    getUsers: async (): Promise<User[]> => {
        const response = await axios.get<User[]>(API_URL, {auth});
        return response.data;
    },
    addUser: async (userData: Omit<User, 'id'>): Promise<User> => {
        const response = await axios.post<User>(API_URL, userData , {auth});
        return response.data;
    },
    updateUser: async (user: User): Promise<User> => {
        const response = await axios.put<User>(`${API_URL}/${user.id}`,user, {auth});
        return response.data;
    },
    deleteUser: async (userId: number): Promise<void> => {
        await axios.delete<User[]>(`${API_URL}/${userId}`, {auth});
    }
}