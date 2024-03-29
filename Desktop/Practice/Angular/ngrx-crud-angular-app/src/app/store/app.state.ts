import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
    // posts: postsReducer
    [SHARED_STATE_NAME]: SharedReducer
}