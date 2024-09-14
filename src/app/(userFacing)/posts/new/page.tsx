import { createPostAction } from "@/app/actions/post";
import PostForm from "@/components/PostForm";


const NewPostPage = async () => {

  return (
    <>
      <PostForm action={createPostAction} />
    </>
  );
};

export default NewPostPage;
