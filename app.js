function galleries() {
  return {
    // State
    index: 0,
    posts: [],
    wide: true,

    // Utility
    getPosts(url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.posts = data.posts));
    },

    // Controllers
    goNext() {
      if (this.isNotLast()) {
        this.index++;
        return;
      }
      this.index = 0;
    },
    goBack() {
      if (this.isNotFirst()) {
        this.index--;
        return;
      }
      this.index = this.posts.length - 1;
    },

    // Predicates
    isNotLast() {
      return this.index < this.posts.length - 1 ? true : false;
    },
    isNotFirst() {
      return this.index > 0 ? true : false;
    },
  };
}
