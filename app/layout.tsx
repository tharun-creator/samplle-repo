import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://launch-to-space.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ToSpace | Launch To Space High-Altitude Balloon Missions in India",
    template: "%s | Launch To Space",
  },
  description:
    "ToSpace's Launch To Space platform carries payloads to 30-35 km for research, technology demonstrations, education, commercial missions and stratospheric product marketing.",
  keywords: [
    "high altitude balloon India",
    "stratosphere mission",
    "near space payload",
    "space marketing India",
    "high altitude balloon payload",
    "stratospheric payload platform",
    "near space missions India",
    "product launch stratosphere",
    "ToSpace",
    "Launch To Space",
    "Tamil Nadu aerospace",
    "Chennai space startup",
    "Karur aerospace",
  ],
  applicationName: "Launch To Space",
  authors: [{ name: "ToSpace Private Limited", url: siteUrl }],
  creator: "ToSpace Private Limited",
  publisher: "ToSpace Private Limited",
  category: "Aerospace services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ToSpace Launch To Space",
    title: "ToSpace | Launch To Space High-Altitude Balloon Missions in India",
    description:
      "Carry payloads, experiments and products to 30-35 km with ToSpace's high-altitude balloon platform in India.",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Launch To Space high-altitude balloon mission platform by ToSpace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToSpace | Launch To Space High-Altitude Balloon Missions in India",
    description: "Carry payloads, experiments and brand content to 30-35 km with ToSpace in India.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Karur, Tamil Nadu, India",
    "geo.position": "10.9601;78.0766",
    ICBM: "10.9601, 78.0766",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=IBM+Plex+Sans:wght@200;300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
