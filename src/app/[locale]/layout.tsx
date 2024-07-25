import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Atlanta Car Accident Lawyer | Atlanta Happens",
  description: "Atlanta Car Accident Lawyer | Atlanta Happens",
  openGraph: {
    type: "website",
    url: "https://www.atlantahappens.com/",
    title: "Atlanta Car Accident Lawyer | Atlanta Happens",
    description: "Atlanta Car Accident Lawyer | Atlanta Happens",
    images: [
      {
        url: "https://www.atlantahappens.com/Bannerthree.webp",
        width: 800,
        height: 600,
        alt: "Featured Image",
      },
    ],
  },
  // favicon: "/favicon.ico",
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
