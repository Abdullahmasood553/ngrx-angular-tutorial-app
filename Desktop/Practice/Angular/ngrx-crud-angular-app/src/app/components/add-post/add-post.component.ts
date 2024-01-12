import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/posts.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { addPost } from '../../posts/state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  constructor(private store: Store<AppState>) {}
  postForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description')
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if(descriptionForm.errors?.['required']) {
        return "Description is required";
      }

    if (descriptionForm.errors?.['minLength']) {
      return "Description should be minimum 0 characters length";
    }  
    }
    return;
  }

  
  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };

    this.store.dispatch(addPost({ post }));
  }
}
