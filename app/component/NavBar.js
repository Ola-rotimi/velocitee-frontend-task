import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <h1>Ve Blog</h1>
      </Link>
      <button>
        <Link href="/create-post">Create Post</Link>
      </button>
    </nav>
  );
}
