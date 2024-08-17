import { ReactNode } from "react";
import { Main } from "./main";
import { PageHeading } from "./page-heading";
import Image, { StaticImageData } from "next/image";

type Props = {
  children: ReactNode;
  heading: string;
  image: StaticImageData;
  alt: string;
};

export function FullPageArticle({ heading, children, image, alt }: Props) {
  return (
    <Main>
      <article>
        <Image src={image} alt={alt} width="640" height="320" />

        <PageHeading heading={heading} />
        {children}
      </article>
    </Main>
  );
}
