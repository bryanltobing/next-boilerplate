import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "@Definitions";

import { ReduxPost } from "./post";

const reducerPath = "postApi";
export const postApi = createApi({
  reducerPath,
  baseQuery: fetchBaseQuery({ baseUrl: env.NEXT_PUBLIC_API_URL }),
  endpoints: builder => ({
    getPosts: builder.query<ReduxPost.GetPosts, ReduxPost.GetPostsParams>({
      query: params => ({ url: "/posts", params }),
    }),
    getPost: builder.query<
      ReduxPost.GetPost,
      { id: string; params?: ReduxPost.GetPostParams }
    >({
      query: ({ id, params }) => ({ url: `/posts/${id}`, params }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;
