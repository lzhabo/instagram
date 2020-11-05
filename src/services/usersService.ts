import { apiService } from "./index";
import { IUser } from "../interfaces";

//api -> service -> store -> (vm) -> component

type TUpdateUserParams = Omit<IUser, "_id">;

export default {
  users: (): Promise<IUser[]> => apiService.makeApiRequest(`api/v1/users`),

  user: (id: string): Promise<IUser> =>
    apiService.makeApiRequest(`api/v1/users/${id}`),

  createUser: (data: TUpdateUserParams): Promise<IUser> =>
    apiService.makeApiRequest(`api/v1/users/`, { method: "POST", data }),

  updateUser: (id: string, data: TUpdateUserParams): Promise<IUser> =>
    apiService.makeApiRequest(`api/v1/users/${id}`, { method: "PUT", data }),

  deleteUser: (id: string): Promise<IUser> =>
    apiService.makeApiRequest(`api/v1/users/${id}`, { method: "DELETE" }),
};
