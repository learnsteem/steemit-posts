import { Component, OnInit } from '@angular/core';
import { PostDataService } from './post-data.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostDataService]
})
export class AppComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postDataService: PostDataService) { }

  public ngOnInit() {
    this.postDataService.getPosts().then((posts) => {
      this.posts = posts;
    }).catch((error) => {
      console.log(error);
    });
  }
}
