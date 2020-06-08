import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts/1', todo);
  }

  getTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getTodosPromise() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts/1').toPromise();
  }

  delete(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}