import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "../../queries/posts";

const Index = () => {
  const { data, isPending, isError } = useQuery(postsQueryOptions);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export const Route = createFileRoute("/test/")({ component: Index });
