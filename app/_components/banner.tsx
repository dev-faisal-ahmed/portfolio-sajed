import { Circle } from "@/components/svg/circle";
import { Pentagon } from "@/components/svg/pentagon";
import { Poop } from "@/components/svg/poop";
import { Rectangle } from "@/components/svg/rectangle";

export function Banner() {
  return (
    <section className="container mt-12 flex py-12">
      <div>
        <h1 className="text-primary text-2xl">UI/UX Designer</h1>
        <p className="text-white font-light my-6 text-sm">
          Committed to enhancing user experiences, eager to contribute <br /> creativity, and driven to create
          compelling UI designs. I had the <br /> opportunity to collaborate with frontend developers.
        </p>
        <button className="bg-primary rounded-md px-5 py-2 font-semibold">Contact me</button>
      </div>
      <div className="hidden md:block relative flex-1">
        <Rectangle className="absolute bottom-16 right-48" />
        <Circle className="absolute -bottom-16 right-80" />
        <Pentagon className="absolute -top-16 right-0" />
        <Poop className="absolute -bottom-16 right-0" />
      </div>
    </section>
  );
}
