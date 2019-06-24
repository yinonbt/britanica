import { Injectable } from '@angular/core';
import { HttpClient, } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { PostItem } from '../models/post-item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postItemsSubject = new BehaviorSubject<PostItem[]>([]);

  get postItems$(): Observable<PostItem[]> {
    return this.postItemsSubject;
  }
  constructor(private http: HttpClient) { }

  getAll(): void {
    const url = `${environment.apiUrl}posts`;
    this.http.get<PostItem[]>(url).subscribe(result => {
      this.postItemsSubject.next(result);
    });
  }
}
