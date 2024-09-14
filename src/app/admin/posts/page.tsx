const PostsPage = async () => {
  const posts = [{ id: 1, createAt: "12 may", title: "software" }];
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
                <td>{post.createAt}</td>
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
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
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
