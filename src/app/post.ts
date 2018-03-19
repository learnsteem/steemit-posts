export class Post {
  title = '';
  author = '';
  body = '';
  created = '';
  images: Array<string> = [];
  tags: Array<string> = [];
  net_votes = 0;
  pending_payout_value = 0;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
