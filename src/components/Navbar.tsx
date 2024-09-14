import { SignInAction, SignOutAction } from "@/app/actions/login";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { ToggleButton } from "./ToggleButton";
export default async function Navbar() {
  const session = await auth();
  const user = session?.user;
  
  return (
    <nav className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl hidden lg:inline-flex">Meta Blog</a>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            {/*  <label  className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            <label
              htmlFor="my-drawer"
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              tabIndex={0}
              className="menu bg-base-200 text-base-content min-h-full w-80 p-4"
            >
              <li>
                <SearchBar />
              </li>
              <div className="divider"></div>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>

              {user ? (
                <li>
                  <Link href="/posts/new">New Post</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
      <a className="btn btn-ghost text-xl text-center lg:hidden">Meta Blog</a>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          {user ? (
            <li>
              <Link href="/posts/new">New Post</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-3 ">
        <ToggleButton />

        {user ? <UserButton user={user} /> : <SignInButton />}
      </div>
    </nav>
  );
}

const SearchBar = () => {
  return (
    <label className="input input-bordered flex items-center gap-2 input-sm w-auto">
      <input
        type="text"
        className="w-24 placeholder:text-sm"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70 hidden lg:block"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

function UserButton(user: any) {
  const avatarPath = user?.image;

  const imageSrc = avatarPath ? avatarPath : null;
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar btn-ghost btn ">
        {imageSrc ? (
          <div className="w-10 rounded-full">
            <Image
              src={imageSrc}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ) : (
          <FaUserCircle className="text-3xl" />
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <p>
            <FaCog className="mr-2" />
            Setting
          </p>
        </li>
        <li>
          <form action={SignOutAction}>
            <button className="flex" type="submit">
              <FaSignOutAlt className="mr-2" />
              Sign Out
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}

function SignInButton() {
  return (
    <form action={SignInAction}>
      <button type="submit" className="btn btn-neutral">
        Sign In
      </button>
    </form>
  );
}
