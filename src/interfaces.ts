export interface IUser {
  avatar: string;
  name: string;
  _id: string;
}

export interface IPost {
  _id: string;
  user: IUser;
  photo: string;
  location: string;
  likes: number;
  description: string;
}

export interface IComment {
  _id: string;
  content: string,
  user: IUser
}

