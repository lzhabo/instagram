export interface IUser {
    avatar: string
    name: string
}

export interface IComment {
    user: IUser
    content: string
}

export interface IPost {
    user: IUser
    photo: string
    location: string
    likes: number
    description: string
    comments: IComment[]
}