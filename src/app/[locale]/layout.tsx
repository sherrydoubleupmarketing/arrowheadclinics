import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-W6HWDQJT" />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6HWDQJT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-88B4D9LTQ2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-88B4D9LTQ2');`,
          }}
        />
        {/* End Google Analytics */}
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
