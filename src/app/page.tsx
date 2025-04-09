import { H1, Lead, P } from "@/components/ui/typography";
import { ShortInfo } from "@/features/short-info";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-2 pt-4">
      <div className="align-center flex justify-start gap-4">
        <H1>Marcus Rådell</H1>
        <Lead>From idea to product</Lead>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="pb-4 md:pb-0">
          <Image
            src="/marcus_radell.jpg"
            alt="Marcus Rådell"
            width={400}
            height={225}
            className="rounded-lg"
          />
          <ShortInfo />
        </div>
        <div className="md:pl-8">
          <P>
            As a manager, Marcus values psychological safety and approach each
            individual with curiosity. He channels the natural value that comes
            from developers that thrive at work.
          </P>
          <P>
            As a product developer, Marcus thrives as an innovator that thinks
            outside the box. He merges product planning with agile development.
            Extreme programming, mob programming, test-driven developement, user
            story mapping, and lean processes are keywords that represents his
            work style.
          </P>
          <P>
            As a software developer, Marcus believes that quality software takes
            less effort to write than rushed software. He focuses on decoupling
            features to keep the cost of maintenance low.
          </P>
        </div>
      </div>
    </main>
  );
}
