import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center gap-8">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
