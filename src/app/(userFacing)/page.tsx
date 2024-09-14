import { PostCard } from "@/components/PostCard";
import Image from "next/image";
import { AdsBox } from "@/components/AdsBox";

import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { getUsers } from "@/lib/users";

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();

  const userMap = new Map(users.map((user) => [user.id.toString(), user.name]));
  const latestPosts = posts
    .sort(
      (a: { createdAt: Date }, b: { createdAt: Date }) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 6);
  return (
    <main className="flex flex-col justify-center items-center content-center space-y-16">
      <CoverImage />
      <AdsBox />
      <>
        <h2 className="text-md font-bold flex self-start">Last Post</h2>
        <div className="flex flex-wrap gap-5 justify-center content-center w-auto">
          {latestPosts.map((item) => {
            const userName = userMap.get(item.authorId.toString()) || "Unknown";

            return <PostCard key={item.id} name={userName} {...item} />;
          })}
        </div>
        <Link href="/posts" className="btn btn-outline">
          Load More
        </Link>
      </>

      <AdsBox />
    </main>
  );
}

const CoverImage = () => {
  return (
    <Image
      src="/images/imageCover.jpg"
      alt="cover image"
      width={1216}
      height={600}
      className="rounded-lg"
    />
  );
};
