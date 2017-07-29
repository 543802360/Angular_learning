/**
 * 文章类(数据结构)
 */
class Article {
  constructor(public title : string, public link : string, public votes = 0) {}
  voteUp() {
    this.votes += 1;
  }
  voteDown() {
    this.votes -= 1;
  }
  domain() : string {
    try {
      const link : string = this
        .link
        .split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}

export default Article;
