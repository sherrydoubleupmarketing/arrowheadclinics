import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { useEffect } from "react";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//cdn.callrail.com/companies/542677903/715a9313af9e0701b31e/12/swap.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
