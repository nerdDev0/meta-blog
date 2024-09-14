import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PostCard } from "@/components/PostCard";
import { getUser } from "@/lib/users";
import { getUserPosts } from "@/lib/posts";

const AuthorPage = async ({ params: { id } }: { params: { id: string } }) => {
  const user = await getUser(id);
  if (user == null) return null;
  const userPosts = await getUserPosts(user?.id);
  return (
    <div className="flex flex-col items-center justify-center content-center space-y-10">
      <div className="flex flex-col items-start md:items-center bg-neutral-200 rounded-lg  p-5 space-y-5 w-10/12 dark:dark:bg-slate-700">
        <div className="flex max-w-72 justify-around items-center">
          <div className="avatar mr-4 w-[50px]">
            <div className=" rounded-full w-[100px]">
              <Image
                alt="profile"
                src="/images/profile2.png"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div>
            <p className="text-md md:text-lg font-bold">{user?.name}</p>
            <p className="text-sm ">{user?.email}</p>
          </div>
        </div>

        <p className="authorInfo text-sm md:text-md md:text-center">
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet
        </p>

        <div className="flex justify-around w-40">
          <FaInstagram className="socialIcon bg-gray-500" />
          <FaFacebook className="socialIcon  bg-gray-500 " />
          <AiFillYoutube className="socialIcon  bg-gray-500 " />
          <FaSquareXTwitter className="socialIcon  bg-gray-500 " />
        </div>
      </div>
      <>
        <h2 className="text-md font-bold flex self-start">Last Post</h2>
        
        <div className="flex flex-wrap gap-5 justify-center content-center w-auto">
        {userPosts.map((post) => (
          <PostCard key={post.id} name={user?.name || "meta user"} {...post} />
        ))}
        </div>
      </>
    </div>
  );
};

export default AuthorPage;
