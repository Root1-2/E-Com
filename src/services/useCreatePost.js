import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "./apiPosts";
import toast from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success("New Post successfully created");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createPost, isLoading };
}