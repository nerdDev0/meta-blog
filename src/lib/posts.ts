import { Prisma } from "@prisma/client";
import prisma from "./prisma";
import { unstable_cache } from "next/cache";
import { cache } from "react";
export async function createPost({
  title,
  content,
  authorId,
}: {
  title: string;
  content: string;
  authorId: string;
}) {
  return prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: authorId,
    },
  });
}

export async function updatePost(
  postId: string,
  {
    title,
    content,
    authorId,
  }: {
    title: string;
    content: string;

    authorId: string;
  }
) {
  return prisma.post.update({
    where: { id: postId },
    data: {
      title: title,
      content: content,
      authorId: authorId,
    },
  });
}

export async function deletePost(postId: string) {
  return prisma.post.delete({ where: { id: postId } });
}

export const getPosts = unstable_cache(
  cache(
    async ({ authorId, query }: { authorId?: string; query?: string } = {}) => {
      const where: Prisma.PostFindManyArgs["where"] = {};
      if (query) {
        where.OR = [
          { title: { contains: query } },
          { content: { contains: query } },
        ];
      }
      if (authorId) {
        where.authorId = authorId;
      }
      return prisma.post.findMany({ where });
    }
  ),
  ["posts"]
);

export const getPost = unstable_cache(
  cache(async (postId: string) => {
    return prisma.post.findUnique({ where: { id: postId } });
  }),
  ["posts", "postId"]
);

export const getUserPosts=unstable_cache(cache(async(authorId:string)=>{
return prisma.post.findMany({where:{authorId:authorId}})
}),["posts","authorId"])