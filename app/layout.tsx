import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spending Management App",
  description: "rack your income, expenses, and financial goals effortlessly with our Spending Management App. Stay organized and achieve smarter money management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
