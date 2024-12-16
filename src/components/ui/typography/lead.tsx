import { ReactNode } from "react";

type Props = { children: ReactNode };

export function Lead({ children }: Props) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}
