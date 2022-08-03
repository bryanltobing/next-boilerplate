export declare namespace GeneralPost {
  interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
}

export declare namespace ReduxPost {
  interface GetPosts extends Array<GeneralPost.Post> {}

  interface GetPostsParams {
    _limit: number;
  }

  interface GetPost extends GeneralPost.Post {}

  interface GetPostParams {}
}
