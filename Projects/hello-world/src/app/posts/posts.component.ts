import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value, id: 1 };
    input.value = '';

    this.service.createPost(post).subscribe((response) => {
      //post['id'] = response.id;
      this.posts.unshift(post);
      // or could do
      // this.posts.unshift.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe((response) => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
