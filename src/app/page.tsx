import { H1 } from "@/components/ui";
import { AboutMe } from "@/features/about-me";
import { ShortInfo } from "@/features/short-info";

export default function Home() {
  return (
    <main className="container mx-auto px-2 pt-4">
      <H1>Marcus Rådell</H1>
      <ShortInfo />
      <AboutMe />
    </main>
  );
}
