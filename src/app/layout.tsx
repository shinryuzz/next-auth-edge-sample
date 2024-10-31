import { SessionProvider } from "next-auth/react";
import "./globals.css";

import Container from "@/components/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SessionProvider>
          <Container>{children}</Container>
        </SessionProvider>
      </body>
    </html>
  );
}
