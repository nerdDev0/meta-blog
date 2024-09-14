
import FormattedDate from "@/components/FormattedDate";
import { getPost } from "@/lib/posts";
import { getUser } from "@/lib/users";
import Image from "next/image";

const PostPage = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col  items-center w-full md:w-11/12">
      <PostDetails id={id} />
    </div>
  );
};

const PostDetails = async ({ id }: { id: string  }) => {
  const post = await getPost(id);
  return (
    <div className="space-y-3 w-full md:w-1/2">
      <p className="btn text-primary">Technology</p>
      <h2 className="text-2xl font-bold">{post?.title}</h2>
      <UserDetails createAt={post?.createdAt || "Today"} id={post?.authorId || "not-found"} />
      <Image
        src="/images/cover/1.png"
        alt="cover image"
        width={600}
        height={200}
        className="rounded-lg"
      />
      <p>{post?.content}</p>
    </div>
  );
};
const UserDetails =async ({ createAt,id }: { createAt: Date | string , id:string }) => {
const user=await getUser(id)
  return (
    <div className="flex   items-center space-x-5">
      <div className="flex   items-center space-x-2">
        <div className="avatar">
          <div className=" rounded-full ">
            <Image
              alt="profile"
              src="/images/profile.png"
              width={20}
              height={20}
            />
          </div>
        </div>
        <p className="text-sm">{user?.name}</p>
      </div>
      <p className="text-gray-300 text-sm">
        <FormattedDate date={createAt}/>
      </p>
    </div>
  );
};

export default PostPage;
