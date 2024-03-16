import Link from "next/link";
import { socialLinks } from "@/data/data";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="container bg-primary px-8 py-2 rounded-md flex items-center justify-between">
      <h1 className="text-lg font-semibold uppercase">Md Sajed</h1>
      <ul className="flex items-center gap-5 font-medium">
        <Link href={"#project"}>Project</Link>
        <Link href={"#contact"}>Contact</Link>
      </ul>
      <ul className="text-2xl flex items-center gap-3">
        <Link href={socialLinks.linkedIn} target="_blank">
          <FaLinkedin />
        </Link>
        <Link href={socialLinks.github} target="_blank">
          <FaGithub />
        </Link>
      </ul>
    </nav>
  );
}
