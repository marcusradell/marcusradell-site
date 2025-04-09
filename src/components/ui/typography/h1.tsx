import { ReactNode } from "react";

type Props = { children: ReactNode };

export function H1({ children }: Props) {
  return (
    <h1 className="pb-4 text-4xl font-extrabold tracking-tight">{children}</h1>
  );
}
