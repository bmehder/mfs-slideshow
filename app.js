function galleries() {
  return {
    index: 0,
    posts: [],
    getPosts(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.posts = data.posts));
    },
    next() {
      if (this.index < this.posts.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    back() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.posts.length - 1;
      }
    },
  };
}
