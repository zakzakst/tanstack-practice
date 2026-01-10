import { mutationOptions, queryOptions } from "@tanstack/react-query";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async (): Promise<Post[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("投稿一覧の取得に失敗しました");
    }
    return res.json();
  },
});

export const postMutationOptions = mutationOptions({
  mutationKey: ["post"],
  mutationFn: async (newPost: Post): Promise<Post> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
    });
    if (!res.ok) {
      throw new Error("投稿の作成に失敗しました");
    }
    return res.json();
  },
});
