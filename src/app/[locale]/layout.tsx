import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Head from "next/head";
import Script from "next/script";

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
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <meta
          name="google-site-verification"
          content="UI445ezHIhG9-lmWB3w2o6ZbvcqubA4sISFAJzbaDXQ"
        />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script
          src="//cdn.callrail.com/companies/542677903/715a9313af9e0701b31e/12/swap.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
