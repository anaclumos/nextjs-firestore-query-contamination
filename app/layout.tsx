import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/with-next-options">WITH NEXT-OPTIONS</Link>
            </li>
            <li>
              <Link href="/without-next-options">WITHOUT NEXT-OPTIONS</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
