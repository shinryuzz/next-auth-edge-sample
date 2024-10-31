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
        <Container>{children}</Container>
      </body>
    </html>
  );
}
