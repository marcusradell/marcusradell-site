import React from "react";
import Image from "next/image";
import profilePicture from "./profile.jpg";

export default function Home() {
  return (
    <main className="container mx-auto pt-4 prose">
      <article>
        <h1>
          Marcus Rådell <aside>Software Developer</aside>
        </h1>
        <Image
          src={profilePicture}
          alt="Profile picture of the author"
          width="500"
          height="250"
        />
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
          My first programming milestone in open source was writing a
          preconfigured build setup using Gulp and Browserify. It was awesome,
          but I didn&apos;t really get how good it was until webpack came along.
          Here&apos;s the repo:{" "}
          <a href="https://github.com/marcusradell/mn-gulp">
            https://github.com/marcusradell/mn-gulp
          </a>
          . It&apos;s the first npm package I published as well.
        </p>
        <p>
          One of the code tests I did during this time used mn-gulp. I wrote
          components (directives) in Angular v1, which was rare at the time. I
          also broke out the logic out of the framework to keep the code
          organized. The code is pretty simple, but I&apos;m still very proud of
          it:{" "}
          <a href="https://github.com/marcusradell/mn-lol">
            https://github.com/marcusradell/mn-lol
          </a>
          .
        </p>
        <p>
          I started to experiment with React and state management using reducers
          and streams. Here&apos;s some code I used for a presentation:{" "}
          <a href="https://github.com/marcusradell/talks-react-first-principles">
            https://github.com/marcusradell/talks-react-first-principles
          </a>
          . I kept the code even more out of the framework now, which was a hard
          sell in the React community.
        </p>
        <p>
          My state-management masterpiece was `rx-machine`. I used TypeScript,
          RxJS, and some patterns I invented for state management in React to
          write a really cool finite state machine lib. By accident, it turned
          out to be faster than all the popular form libs at the time.{" "}
          <a href="https://github.com/marcusradell/rx-machine">
            https://github.com/marcusradell/rx-machine
          </a>
          . Here&apos;s the performance test on 1000 fields:{" "}
          <a href="https://codesandbox.io/s/rx-machine-1000-fields-8y9nj">
            https://codesandbox.io/s/rx-machine-1000-fields-8y9nj
          </a>
          .
        </p>
        <p>
          My most starred repo is a web server written in Rust:{" "}
          <a href="https://github.com/marcusradell/monadium_v1">
            https://github.com/marcusradell/monadium_v1
          </a>
          . I have made more progress in other repos, so ask me directly if you
          are interested. I have done a talk in Swedish about junior developers
          and their careers:{" "}
          <a href="https://soundcloud.com/user-840142870/marcus-radell-utvecklares-karriarer">
            https://soundcloud.com/user-840142870/marcus-radell-utvecklares-karriarer
          </a>
          . It&apos;s a topic I&apos;ve been passionate about, and before
          working with it professionally, I mentored devs across the globe on my
          spare time. My most recent contribution has been to try and document
          some TypeScript patterns that I&apos;ve taught teams over the last
          years. Check out this specific branch called{" "}
          <a href="https://github.com/marcusradell/code_typing/tree/final_modular_monolith">
            https://github.com/marcusradell/code_typing/tree/final_modular_monolith
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
    </main>
  );
}
