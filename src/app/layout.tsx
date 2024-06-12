import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlanta Happens",
  description: "Atlanta Happens",
  openGraph: {
    type: "website",
    url: "https://atlantahappens.vercel.app/",
    title: "Atlanta Happens",
    description: "Atlanta Happens",
    images: [
      {
        url: "https://atlantahappens.vercel.app/Bannerthree.webp",
        width: 800,
        height: 600,
        alt: "Featured Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
