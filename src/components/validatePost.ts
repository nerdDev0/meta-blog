import { z } from "zod";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
const postSchema = z.object({
  title: z.string().min(4, { message: "Title Required" }),
  content: z.string().min(30, { message: "Content Required" }),

});

 const  validatePost = async(formData: FormData) => {
    const session = await auth();
    const user = session?.user;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const authorId = user?.id as string;

  const errors: { title?: string; content?: string; authorId?: string } = {};
  let isValid = true;

  try {
    postSchema.parse({ title, content, authorId });
  } catch (error) {
    const zodErrors = (error as z.ZodError).flatten().fieldErrors;
    if (zodErrors.title) {
      errors.title = zodErrors.title[0];
      isValid = false;
    }
    if (zodErrors.content) {
      errors.content = zodErrors.content[0];
      isValid = false;
    }
  }

  if (!authorId) {
    redirect("/api/auth/signin");
  }

  return [isValid ? { title, content, authorId } : undefined, errors] as const;
};
