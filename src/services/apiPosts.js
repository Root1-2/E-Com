import supabase from "./supabase";

export async function createPost(newPost) {
  const { data, error } = await supabase
    .from("posts")
    .insert([newPost])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  return data;
}