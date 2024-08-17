import React from "react";
import Image from "next/image";
import profilePicture from "./profile.jpg";
import { Main } from "@/components";

export default function Home() {
  return (
    <Main>
      <article>
        <Image
          src={profilePicture}
          alt="Profile picture of the author"
          width="640"
          height="320"
        />
        <h1>Marcus Rådell::Software Developer</h1>

        <p>
          👋 Hi there, you have reached Marcus Rådell, Head of Teaching at{" "}
          <a href="https://salt.dev">https://salt.dev</a>. Please leave a
          message at my Discord:{" "}
          <a href="https://discord.com/invite/59hgZycxYJ">
            https://discord.com/invite/59hgZycxYJ
          </a>
          .
        </p>
        <p>
          I&apos;ve also done a bit of live coding as I&apos;m trying to
          collaborate more with people interested in writing quality code:{" "}
          <a href="https://www.youtube.com/live/KQFAHVMMpjs">
            https://www.youtube.com/live/KQFAHVMMpjs
          </a>
          . It&apos;s a topic I hope to contribute more to in the future. You
          can find the code in the code typing repo above, but in the branch{" "}
          <code>final_hexagon</code>. OK, time to stop stalking my GitHub
          profile! Developers, get back to coding! Recruiters, if you contact
          me, be prepared to hear about our great SALT developers (they&apos;re
          better than yours, but I have to charge)!
        </p>
      </article>
    </Main>
  );
}
