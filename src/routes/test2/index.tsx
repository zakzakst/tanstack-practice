import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { postMutationOptions } from "../../queries/posts";

const Index = () => {
  const { mutate, data, isPending, isSuccess, isError } =
    useMutation(postMutationOptions);

  const addPost = () => {
    mutate({
      userId: 1,
      id: 1,
      title: "add test title",
      body: "add test body",
    });
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <div>
        <button type="button" onClick={addPost}>
          Post作成
        </button>
      </div>
      <div>{JSON.stringify(data)}</div>
      {isSuccess && <div>作成成功</div>}
    </div>
  );
};

export const Route = createFileRoute("/test2/")({ component: Index });
