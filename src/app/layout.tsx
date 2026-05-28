import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Happy Birthday AJAY & BHAVIKA',
  description: 'A heartfelt and luxurious birthday wishes experience for Ajay & Bhavika, filled with cherished memories and emotional messages. Enjoy this special cinematic dedication.',
  openGraph: {
    "title": "Happy Birthday AJAY & BHAVIKA",
    "description": "A heartfelt and luxurious birthday wishes experience for Ajay & Bhavika, filled with cherished memories and emotional messages. Enjoy this special cinematic dedication.",
    "url": "/",
    "siteName": "AJAY & BHAVIKA Birthday",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-couple-celebrating-new-years-eve_329181-13337.jpg",
        "alt": "Elegant couple celebrating birthday"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Happy Birthday AJAY & BHAVIKA",
    "description": "A heartfelt and luxurious birthday wishes experience for Ajay & Bhavika, filled with cherished memories and emotional messages. Enjoy this special cinematic dedication.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-couple-celebrating-new-years-eve_329181-13337.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
