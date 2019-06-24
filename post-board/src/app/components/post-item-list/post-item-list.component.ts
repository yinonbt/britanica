import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostItem } from 'src/app/models/post-item';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-item-list',
  templateUrl: './post-item-list.component.html',
  styleUrls: ['./post-item-list.component.scss']
})
export class PostItemListComponent implements OnInit {
  postItems$: Observable<PostItem[]>;

  constructor(private postService: PostsService) { 
    this.postItems$ = this.postService.postItems$;
    
  }

  ngOnInit() {
    this.postService.getAll();
  }

}
