import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AosProvider from "@/components/providers/AosProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Way Gibb - Delivered Reliably | Premium Food & Building Materials",
  description: "High-quality meat, poultry, and construction materials delivered directly to you with instant delivery or scheduled pre-orders.",
  icons: {
    icon: "/images/waygibb-logo.png",
    apple: "/images/waygibb-logo.png",
  },
  openGraph: {
    title: "Way Gibb - Built for Logistics & Delivery",
    description: "High-quality meat, poultry, and construction materials delivered directly.",
    url: "https://waygibb-web.vercel.app",
    siteName: "Way Gibb",
    images: [
      {
        url: "/images/waygibb-logo.png",
        width: 800,
        height: 600,
        alt: "Way Gibb Branding Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Way Gibb - Delivered Reliably",
    description: "Premium Food & Building Materials Delivery System",
    images: ["/images/waygibb-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} antialiased`}>
      <body className="antialiased min-h-screen flex flex-col">
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
