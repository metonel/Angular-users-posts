import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';   //pentru a putea selecta un singur post din lista
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');  //ia id-ul post-ului
    this.postService.getPost(id).subscribe(post => this.post=post);  //si seteaza this.post post-ul ce il primeste in functie de id
  }

}
