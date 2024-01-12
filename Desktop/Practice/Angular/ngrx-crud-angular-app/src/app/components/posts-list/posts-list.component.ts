import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts.model';
import { getPosts } from '../../posts/state/posts.selector';
import { deletePost } from '../../posts/state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  posts!: Observable<Post[]>;
  
  
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.posts = this.store.select(getPosts);
    console.log(this.posts);
  }

  onDeletePost(id: String) {
    if (confirm("Are you sure to delete")) {
      console.log("Del the post", id);
      this.store.dispatch(deletePost({id}));
    }
  }

}
