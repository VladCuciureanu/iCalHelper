import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iCal Redirect",
  description:
    "Useful little tool to bypass iPhone limitations regarding iCal files.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          Built by Vlad Cuciureanu 2023 -{" "}
          <Link href="https://github.com/VladCuciureanu/iCalHelper">
            Source Code
          </Link>{" "}
          - Your file isn&apos;t sent anywhere
        </footer>
      </body>
    </html>
  );
}
