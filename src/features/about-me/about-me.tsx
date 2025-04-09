import { Lead, P } from "@/components/ui";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="pb-4 md:pb-0">
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
      </div>
      <div className="md:pl-8">
        <P>
          As a manager, I value psychological safety and approach each
          individual with curiosity. I do not squeeze value out of my teams, but
          take care of the value overflow that comes when developers thrive at
          work.
        </P>
        <P>
          As a product developer, I want to bring value to my users, so that I
          can feel pride in my work. I tend to sew together product processes
          that creates a symbiosis between product people and programmers.
          Extreme programming, mob programming, test-driven developement, user
          story mapping, and lean processes are keywords that represents me.
        </P>
        <P>
          As a programmer, I believe that quality software takes less effort to
          write than rushed software. Quality code mainly relates to coupling
          and trust. Can we trust the code enough to change it? If so, our
          system will be much cheaper to maintain.
        </P>
      </div>
    </div>
  );
}
