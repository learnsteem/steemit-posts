import { Injectable } from '@angular/core';
import { api as steemapi } from 'steem';
import { Post } from './post';

@Injectable()
export class PostDataService {

  constructor() { }

  getPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      steemapi.getDiscussionsByCreated({ limit: 10 }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const posts = [];
          result.map((post) => {
            const meta = JSON.parse(post.json_metadata);
            posts.push(new Post({
              title: post.title,
              author: post.author,
              body: post.body,
              created: post.created,
              images: meta.image,
              tags: meta.tags,
              net_votes: post.net_votes,
              pending_payout_value: post.pending_payout_value,
            }));
          });
          resolve(posts);
        }
      });
    });
  }

}
