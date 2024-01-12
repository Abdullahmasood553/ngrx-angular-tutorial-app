import { Post } from "../../models/posts.model"

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        {
            id: '1',
            title: 'Sample Title One',
            description: 'Sample Description 1',  
        },
        {
            id: '2',
            title: 'Sample Title Two',
            description: 'Sample Description 2',
        }
    ]
}   