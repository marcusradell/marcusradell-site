import { Lead } from "@/components";
import Image from "next/image";

export function AboutMe() {
  return (
    <>
      <Image
        src="/marcus_radell.jpg"
        alt="Marcus Rådell"
        width={400}
        height={225}
        className="rounded-lg"
      />
      <div className="w-96 pt-2">
        <Lead>
          I help professional teams turn ideas into software products.
        </Lead>
      </div>
    </>
  );
}
