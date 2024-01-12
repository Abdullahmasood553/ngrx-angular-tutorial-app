import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "../../components/posts-list/posts-list.component";
import { AddPostComponent } from "../../components/add-post/add-post.component";
import { EditPostComponent } from "../../components/edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./posts.reducer";
import { POST_STATE_NAME } from "./posts.selector";


const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
          {
            path: 'add',
            component: AddPostComponent
          },
          {
            path: 'edit/:id',
            component: EditPostComponent,
          }
        ]
      }
];

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule, 
        StoreModule.forFeature(POST_STATE_NAME, postsReducer)
    ],
})
export class PostsModule { }



