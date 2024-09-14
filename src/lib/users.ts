import { unstable_cache } from "next/cache";
import { cache } from "react";
import prisma from "./prisma";

export const getUsers = unstable_cache(
  cache(async () => {
    return prisma.user.findMany();
  }),
  ["users"]
);

export const getUser = unstable_cache(
  cache(async (userId: string) => {
    return prisma.user.findUnique({ where: { id: userId } });
  })
);
