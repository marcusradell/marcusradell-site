import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rådell.marcus",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><nav>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">rådell.marcus</a>
        </div>
      </nav>{children}</body>
    </html>
  );
}
