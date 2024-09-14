import { AdsBox } from "@/components/AdsBox";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/posts";
import { getUsers } from "@/lib/users";

export default async function PostsPage() {
  const posts =await getPosts()
  const users =await getUsers()

  const userMap = new Map(users.map((user) => [user.id.toString(), user.name]));

  return (
    <main className="flex flex-col justify-center items-center content-center space-y-16">
      <h2 className="text-lg font-bold pb-6">Post Title</h2>
      <div className="flex flex-wrap gap-5 justify-center content-center w-auto">
        {posts.map((item) => {
          const userName = userMap.get(item.authorId) || "meta user";

          return <PostCard key={item.id} name={userName} {...item} />;
        })}
      </div>
      <AdsBox />
    </main>
  );
}
