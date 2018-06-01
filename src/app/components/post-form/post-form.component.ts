import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter(); //sa se poata edita mai multe posturi consecutiv (altfel isEdit ar ramane se schimba si ramane false dupa o editare)

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  adaugarePost(title, body){
    if(!title || !body) {
      alert('adauga detaliile postarii!');
    }
    else {
      this.postService.salvarePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post); //emite variabila post in posts.component.html in care ii embeded post-form-ul in tag-ul app-post-form
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);  //emite post-ul editat pentru a se putea face false isEdit, si edita si alte post-uri 
    });
  }

}
