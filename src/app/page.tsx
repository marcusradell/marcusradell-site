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
      </article>
    </Main>
  );
}
