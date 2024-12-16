import { H1, Lead } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto pt-4">
      <H1>Marcus Rådell</H1>
      <Image
        src="/marcus_radell.jpg"
        alt="Marcus Rådell"
        width={400}
        height={225}
        className="rounded-lg"
      />
      <div className="w-96 pt-2">
        <Lead>
          I&apos;m a software developer with a wide set of skills related to
          develop ideas to software products in a professional team environment.
        </Lead>
      </div>
    </main>
  );
}
