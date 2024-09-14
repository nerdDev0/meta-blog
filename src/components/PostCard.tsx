import Image from "next/image";
import Link from "next/link";
import FormattedDate from "./FormattedDate";
export const PostCard = async ({
  id,
  authorId,
  title,
  image,
  createdAt,
  name
}: {
  id: string;
  authorId:string
  title: string;
  image?: string | null;
  createdAt:Date
  name:string
}) => {
  return (
    <>
      <div
        key={id}
        className="card card-compact bg-base-100 min-w-80 max-w-96 shadow-xl"
      >
        <Link href={`/posts/${id}`}>
          <figure>
            <Image src={image ?? "/images/cover/1.png"} alt="Technology" width={400} height={400} />
          </figure>
        </Link>

        <div className="card-body">
          <div className="badge badge-primary badge-outline">Technology</div>

          <Link href={`/posts/${id}`}>
           
            <p className="text-lg font-bold overflow-hidden">{title}</p>
          </Link>

          <div className="card-actions flex content-center">
            <Link
            href={`/users/${authorId}`}
            >
            <Image
              src="/images/profile.png"
              alt="profile"
              width={25}
              height={25}
              />
              </Link>
          <Link href={`/users/${authorId}`}>  <p className="text-sm text-slate-400">{name}</p></Link>

            <p className="text-sm text-slate-400">
              <FormattedDate date={createdAt}/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
