import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../shared/mockData/users";
import type { User } from "../../shared/types/User";

const initialUsers: User[] = users;

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: initialUsers,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
            const newId = Math.max(...state.users.map(u => u.id)) + 1;
            state.users.push({
                id: newId,
                ...action.payload
            })
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
})

export const {addUser, updateUser, deleteUser} = usersSlice.actions

export const selectAllUsers = (state: { users: UsersState }) => state.users.users;
export const selectUserById = (state: { users: UsersState }, userId: number) =>
    state.users.users.find(user => user.id === userId)