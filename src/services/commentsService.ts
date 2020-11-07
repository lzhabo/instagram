import { apiService } from "./index";
import { IComment } from "../interfaces";

//api -> service -> store -> (vm) -> component

type TUpdateCommentParams = Omit<IComment, "_id">;

export default {
  // comments: (): Promise<IComment[]> => apiService.makeApiRequest(`api/v1/comments`),
  comments: async (): Promise<IComment[]> => require('./commentsDefaultData.json'),

  comment: (id: string): Promise<IComment> =>
    apiService.makeApiRequest(`api/v1/comments/${id}`),

  createComment: (data: TUpdateCommentParams): Promise<IComment> =>
    apiService.makeApiRequest(`api/v1/comments/`, { method: "POST", data }),

  updateComment: (id: string, data: TUpdateCommentParams): Promise<IComment> =>
    apiService.makeApiRequest(`api/v1/comments/${id}`, { method: "PUT", data }),

  deleteComment: (id: string): Promise<IComment> =>
    apiService.makeApiRequest(`api/v1/comments/${id}`, { method: "DELETE" }),
};
