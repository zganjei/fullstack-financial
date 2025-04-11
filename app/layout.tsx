import "@/app/ui/global.css"
import {inter} from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme dashboard",
  description: "My App Description",
  metadataBase: new URL('https://github.com/zganjei'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased` }>{children}</body>
    </html>
  );
}
