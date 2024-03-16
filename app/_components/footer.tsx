import { contactInfo, socialLinks } from "@/data/data";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="contact" className="bg-footerColor text-white py-10">
      <div className="container flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl mb-3">Contacts</h3>
          <Link href={`${contactInfo.email}`} className="text-sm">
            Email : {contactInfo.email}
          </Link>
          <Link href={`${contactInfo.phone}`} className="text-sm">
            Phone : {contactInfo.phone}
          </Link>
        </div>
        <div className="text-lg flex items-center gap-3">
          <Link href={socialLinks.linkedIn} target="_blank">
            <FaLinkedin />
          </Link>
          <Link href={socialLinks.github} target="_blank">
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
