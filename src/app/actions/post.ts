"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { createPost, updatePost } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
type Props = {
  title: string;
  content: string;
  authorId: string;
};

export async function createPostAction(formData: FormData) {
  const data = validatePost(formData);
  const post = await createPost(await data);
  revalidatePath("/posts");
  revalidatePath("/");
  revalidatePath("/users");
  redirect(`/posts/${post.id}`);
}
export async function updatePostAction(formData: FormData, postId: string) {
  const data = validatePost(formData);
  const post = await updatePost(postId, await data);
  revalidatePath("/posts");
  revalidatePath("/");
  revalidatePath("/users");
  redirect(`/posts/${post.id}`);
}

async function validatePost(formData: FormData) {
  const session = await auth();
  const user = session?.user;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const authorId = user?.id as string;

  if (!authorId) {
    redirect("/api/auth/signin");
  }

  const result = postSchema.safeParse({ title, content, authorId });

  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join(", "));
  }

  const data: Props = result.data;
  return data;
}

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  authorId: z.string().min(1, "Author ID is required"),
});
