import { H1 } from "@/components";
import { AboutMe } from "@/features";

export default function Home() {
  return (
    <main className="container mx-auto px-2 pt-4">
      <H1>Marcus Rådell</H1>
      <AboutMe />
    </main>
  );
}
