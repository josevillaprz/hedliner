import Image from "next/image";
import Nav from "./nav";
import Link from "next/link";
import logo from "../../public/logo-hedliner.svg";

export default function Header() {
  return (
    <header className="flex justify-between p-4 py-6 md:px-10 mx-auto max-w-7xl">
      <Link href="/">
        <Image src={logo} alt="hedliner" priority />
      </Link>
      <Nav />
    </header>
  );
}
