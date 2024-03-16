import { ProjectType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export function Project({ name, description, type, image, link }: ProjectType) {
  return (
    <Link href={link} target="_blank" className="rounded-md overflow-hidden bg-footerColor">
      <Image className="object-cover object-top" src={image} alt={name} width={600} height={600} />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-primary">{name}</h1>
          <p className="bg-smallButtonColor px-3 py-1 text-xs uppercase rounded-md text-white">{type}</p>
        </div>
        <p className="text-justify mt-3 text-white font-thin text-sm">{description}</p>
      </div>
    </Link>
  );
}
