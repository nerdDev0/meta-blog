import FormattedDate from "@/components/FormattedDate";
import { getPosts } from "@/lib/posts";

const PostsPage = async () => {
const posts=await getPosts()
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Create</th>
              <th>title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-base-200">
                <th>{post.id}</th>
                <td>   <FormattedDate date={post.createdAt}/></td>
                <td>{post.title}</td>
                <td>
                  <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn m-1">
                      Click
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                     <li>
                        <a>Active</a>
                      </li>
                      <li>
                        <a>Inactive</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostsPage;
