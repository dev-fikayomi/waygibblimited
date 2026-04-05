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
