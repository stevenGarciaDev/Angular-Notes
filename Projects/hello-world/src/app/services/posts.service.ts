import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.url);
  }

  createPost(input: Post) {
    return this.http.post(this.url, JSON.stringify(input));
  }

  updatePost(post) {
    return this.http.patch(
      `${this.url}/${post.id}`,
      JSON.stringify({ isRead: true })
    );
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}

export interface Post {
  id: number;
  title: string;
}
