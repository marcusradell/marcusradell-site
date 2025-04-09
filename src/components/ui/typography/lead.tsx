import { ReactNode } from "react";

type Props = { children: ReactNode };

export function Lead({ children }: Props) {
  return <p className="pb-4 text-4xl tracking-tight italic">{children}</p>;
}
