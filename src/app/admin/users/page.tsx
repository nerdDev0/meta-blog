

const UsersPage = async () => {
  const users = [
    {id:1,name:"Amir",about:"developer",email:"nerdev0.com"}
  ]
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-base-200">
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.about}</td>
                <td>{user.email}</td>
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

export default UsersPage;
