import { apiService } from "./index";
import { IPost } from "../interfaces";

//api -> service -> store -> (vm) -> component

type TUpdatePostParams = Omit<IPost, "_id">;

export default {
  posts: (): Promise<IPost[]> => apiService.makeApiRequest(`api/v1/posts`),

  post: (id: string): Promise<IPost> =>
    apiService.makeApiRequest(`api/v1/posts/${id}`),

  createPost: (data: TUpdatePostParams): Promise<IPost> =>
    apiService.makeApiRequest(`api/v1/posts/`, { method: "POST", data }),

  updatePost: (id: string, data: TUpdatePostParams): Promise<IPost> =>
    apiService.makeApiRequest(`api/v1/posts/${id}`, { method: "PUT", data }),

  deletePost: (id: string): Promise<IPost> =>
    apiService.makeApiRequest(`api/v1/posts/${id}`, { method: "DELETE" }),
};
